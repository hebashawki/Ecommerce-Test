import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { WhishlistService } from 'src/app/shared/services/whishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageSize:number=0;
  currentPage:number=0; 
  totalItem:number=0;
  products:product[]=[];
  whishlistData:string[]=[];

  constructor( private _WhishlistService:WhishlistService, private _EcomdataService:EcomdataService , private _CartService:CartService , private _ToastrService:ToastrService){}
ngOnInit(): void {
  this._EcomdataService.getAllProducts().subscribe({
    next:(response)=>{
console.log('products',response.data);
this.products=response.data
this.pageSize=response.metadata.limit
this.currentPage=response.metadata.currentPage
this.totalItem=response.results
console.log(this.totalItem);
console.log(this.currentPage);
console.log(this.pageSize);
this._WhishlistService.getWhishlist().subscribe({
  next:(res)=>{
    console.log('wish',res.data);
    
    const newData=res.data.map((item:any)=> item._id)
    console.log('new' ,newData);
    this.whishlistData=newData;
    

  }
})





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
pageChanged(event:any):void{
  console.log(event);
  this._EcomdataService.getAllProducts(event).subscribe({
    next:(response)=>{
console.log('products',response.data);
this.products=response.data
this.pageSize=response.metadata.limit
this.currentPage=response.metadata.currentPage
this.totalItem=response.results
console.log(this.totalItem);
console.log(this.currentPage);
console.log(this.pageSize);
}
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




