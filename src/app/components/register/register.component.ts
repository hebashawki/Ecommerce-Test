import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
isLoading:boolean=false;
  msError:string='';
  constructor(private _AuthService:AuthService , private _Router:Router){}
registerForm:FormGroup=new FormGroup({
  name:new FormControl(null,[ Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
  email:new FormControl(null , [Validators.required , Validators.email]),
  password:new FormControl(null ,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
  rePassword:new FormControl(null ,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
  phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)])
})
handleForm():void{
 if(this.registerForm.valid){
  this.isLoading=true;
  this._AuthService.setRegister(this.registerForm.value).subscribe({
    next:(response)=>{
     if(response.message=='success'){
      this.isLoading=false;
this._Router.navigate(['/login'])
     }
      

    },
    error:(err:HttpErrorResponse)=>{
      console.log(err.error.message);
      console.log(err);
      
      this.isLoading=false;
     this.msError=err.error.message
    }
  })

 }
}
}
