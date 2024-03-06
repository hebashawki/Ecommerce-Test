import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 cartId:any ='';
 isLoading:boolean=false;
  msError:string='';
  constructor(private _CartService:CartService ,private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
      this.cartId=  params.get('id')
      console.log( "id" ,this.cartId);
      
      }
    })
  }
orderForm:FormGroup = new FormGroup({
  details:new FormControl(null),
  phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  city:new FormControl(null,[ Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
})
handleForm():void{
  console.log(this.orderForm.value);
  const orderData:any=this.orderForm.value
  if(this.orderForm.valid){
    this.isLoading=true;
    this._CartService.checkOut(this.cartId ,orderData ).subscribe({
      next:(response)=>{
        console.log(response);
        if(response.status=="success"){
          this.isLoading=false;
          window.open(response.session.url , '_self' );
          
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
  this._CartService.checkOut(this.cartId ,orderData ).subscribe({
    next:(response)=>{
      console.log(response);
      if(response.status=="success"){
        window.open(response.session.url , '_self' );
        
      }
      

    }
  })
  
}



}
