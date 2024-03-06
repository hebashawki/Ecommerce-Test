import { product } from './../../shared/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { CartService } from 'src/app/shared/services/cart.service';
import { WhishlistService } from 'src/app/shared/services/whishlist.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {
  
constructor(private _CartService:CartService , private _WhishlistService:WhishlistService , private _ToastrService:ToastrService){}
products:product[]=[];
whishlistData:string[]=[];
ngOnInit(): void {
  this._WhishlistService.getWhishlist().subscribe({
    next:(res)=> {
      console.log(res);
      this.products=res.data
      const newData=res.data.map((item:any)=> item._id)
      
      this.whishlistData=newData;
      
    },
  })
  

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
      this.whishlistData=res.data;

const newProductWish=this.products.filter((item:any)=>this.whishlistData.includes(item._id) )
this.products = newProductWish;
//       this._WhishlistService.getWhishlist().subscribe({
//         next:(response)=>{
// this.products
//         }
//       })
      
    }
  })
  }
}
