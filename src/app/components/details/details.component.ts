import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor( private _ActivatedRoute:ActivatedRoute , private _EcomdataService:EcomdataService , private _Renderer2:Renderer2 , private _CartService:CartService , private _ToastrService:ToastrService){ }
productDetails:product={} as product;
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
let idProduct:any= (params.get('id'));
this._EcomdataService.getProductDetails(idProduct).subscribe({
  next:(response)=>{
    console.log(response.data);
    this.productDetails=response.data

  }
})

    }
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
console.log('add',response.message);


  },
  
})
}
}
