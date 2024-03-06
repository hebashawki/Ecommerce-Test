import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartDetails:any=null;
constructor(private _CartService:CartService , private _Renderer2:Renderer2 , private _Router:Router){}

ngOnInit(): void {
  this._CartService.getCartUser().subscribe({
    next:(response)=>{
console.log(response);
this.cartDetails=response.data
    }
  }
  );
}
romoveItem(id:string , elememt:HTMLButtonElement):void{
  this._Renderer2.setAttribute(elememt ,'disable' , 'true')
  this._CartService.removeCartItem(id ).subscribe({
    next:(response)=>{
console.log(response);
this.cartDetails=response.data
this._Renderer2.removeAttribute(elememt ,'disable' )
this._CartService.cartNumber.next(response.numOfCartItems)

    }, 
    error:(error)=>{
      this._Renderer2.removeAttribute(elememt ,'disable' )
    }

  })
}
updateCount(count:number ,id:string , element1:HTMLButtonElement , element2:HTMLButtonElement):void{
  console.log(count);
  if(count >=1){
    this._Renderer2.setAttribute( element1 , 'disable' , 'true')
    this._Renderer2.setAttribute( element2 , 'disable' , 'true')
    this._CartService.updateCartCount(id , count).subscribe({
      next:(response)=>{
  console.log(response);
  this.cartDetails=response.data
  this._Renderer2.removeAttribute( element1 , 'disable' )
  this._Renderer2.removeAttribute( element2 , 'disable' )
      },
      error:(error)=>{
        this._Renderer2.removeAttribute(element1 ,'disable' )
        this._Renderer2.removeAttribute(element2 ,'disable' )
      }
    })
  }
 
  
}
removeCart():void{
  this._CartService.removeCart().subscribe({
    next:(res)=>{
console.log(res);
if(res.message=='success'){
this.cartDetails=null;
this._CartService.cartNumber.next(0)
}

    }
  })

}
goToPay(id:string):void{
  this._Router.navigate(['/payment', id])
}




 
  }






 {




}
