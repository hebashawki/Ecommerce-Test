import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WhishlistService } from 'src/app/shared/services/whishlist.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit{
  
  cartNum:number=0;
 wishNum:number=0;
constructor (private _WhishlistService:WhishlistService, private _AuthService:AuthService , private _CartService:CartService){
}
ngOnInit(): void {
  this._CartService.cartNumber.subscribe({
    next:(data)=>{
      console.log('data' , data);
      this.cartNum=data
    },
  });
  this._CartService.getCartUser().subscribe({
    next:(response)=>{
      this.cartNum=response.numOfCartItems
    },
  })
//   this._WhishlistService.wishNumber.subscribe({
//     next:(data)=>{
// this.wishNum=data
//     }
//   })
}




  logOutUser():void{
this._AuthService.logOut()
  }
}
