import { CommonModule } from '@angular/common';
import { Categorys } from './../../shared/interfaces/categorys';
import {  product } from './../../shared/interfaces/product';
import { EcomdataService } from './../../shared/services/ecomdata.service';
import { Component, OnInit } from '@angular/core';
import{ OwlOptions}from 'ngx-owl-carousel-o';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/shared/services/cart.service';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { WhishlistService } from 'src/app/shared/services/whishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 

  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  products:product[]=[];
  Category:Categorys[]=[];
  term:string=''
  whishlistData:string[]=[];
constructor(private _WhishlistService:WhishlistService, private _EcomdataService:EcomdataService , private _CartService:CartService , private _ToastrService:ToastrService){}

ngOnInit(): void {
  this._EcomdataService.getAllProducts().subscribe({
    next:(response)=>{
console.log('products',response.data);
this.products=response.data

    },
    
  })
  this._EcomdataService.getCategory().subscribe({
    next:(res)=>{
      console.log( 'Category',res);
      
this.Category=res.data
    },
    error:(err)=>{
console.log(err);

    }
  })
  this._WhishlistService.getWhishlist().subscribe({
    next:(res)=>{
      console.log('wish',res.data);
      
      const newData=res.data.map((item:any)=> item._id)
      console.log('new' ,newData);
      this.whishlistData=newData;
      

    }
  })
}

categoryOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  autoplayTimeout:7000,
  autoplaySpeed:1000,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 3
    },
    740: {
      items: 4
    },
    940: {
      items: 6
    }
  },
  nav: true
}

mainSlideOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  items:1,
  nav: true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplaySpeed:1000,
}
addProduct(id:any) :void{
  console.log('hi');
  
this._CartService.addToCart(id).subscribe({
  next:(response)=>{
console.log(response);
this._ToastrService.success(response.message)
this._CartService.cartNumber.next(response.numOfCartItems)
console.log(response.message);


  },
  
})
}

addfav(prodId:string):void{
this._WhishlistService.addToWhishlist(prodId).subscribe({
  next:(res)=>{
    console.log(res);
    this._ToastrService.success(res.message)
    this.whishlistData=res.data
  }
})
}
removeFav(prodId:any):void{
this._WhishlistService.removeWhishlist(prodId).subscribe({
  next:(res)=>{
    console.log(res);
    this._ToastrService.success(res.message)
    this.whishlistData=res.data
    
  }
})
}



}
