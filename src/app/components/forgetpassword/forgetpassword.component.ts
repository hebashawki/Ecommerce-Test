import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/shared/forgetpassword.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  constructor(private _Router:Router, private _ForgetpasswordService:ForgetpasswordService){}
step1:boolean=true;
step2:boolean=false;
step3:boolean=false;
email:string=''
userMsg:string=''


 forgetForm:FormGroup=new FormGroup({
   email:new FormControl(null , [Validators.required , Validators.email]),
 })
resetCodeForm:FormGroup=new FormGroup({
  resetCode:new FormControl(null , [Validators.required ]),
})
resetPasswordForm:FormGroup=new FormGroup({
  newPassword:new FormControl(null ,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
})
 forgetPassword():void{
let userEmail=this.forgetForm.value;
this.email=userEmail.email;
this._ForgetpasswordService.forgetPassword(userEmail).subscribe({
  
  next:(response)=>{
console.log(response);
this.userMsg=response.message
this.step1=false;
this.step2=true;


  },
  error:(err)=>{
this.userMsg=err.error.message;

  }
})


 }
 resetCode():void{
  let resetCode=this.resetCodeForm.value
this._ForgetpasswordService.resetCode(resetCode).subscribe({
  next:(response)=>{
console.log(response);
this.userMsg=response.status
this.step2=false;
this.step3=true;


  },
  error:(err)=>{
    this.userMsg=err.error.message;
  }
})
 }
newPssword():void{
  let resetForm=this.resetPasswordForm.value;
  resetForm.email=this.email
this._ForgetpasswordService.resetPass(resetForm).subscribe({
  next:(response)=>{
console.log(response);
this.userMsg=response.status
if(response.token){
localStorage.setItem('etoken',response.token);
this._Router.navigate(['/home'])
}

  },
  error:(err)=>{
    this.userMsg=err.error.message;
  }

})
 }
}
