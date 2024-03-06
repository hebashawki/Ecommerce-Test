import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartNumber:BehaviorSubject<number>= new BehaviorSubject(0)
myToken:any={
  token : localStorage.getItem('etoken')
  
  
}

  constructor(private _HttpClient:HttpClient) { }
  addToCart(prodId:any):Observable<any>{
  
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
   
    {
    productId: prodId,
},
{
  headers: this.myToken
  
}
   );
  
   
  }
  getCartUser():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
    {
      headers:this.myToken
    }
    )
  }
  removeCartItem(prodId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,
    {
      headers:this.myToken
    }
    )
  }

updateCartCount(prodId:string , countNum:number):Observable<any>{
return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,
{
  count: countNum
},
{
  headers:this.myToken
}



)
}

removeCart():Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
  {
    headers:this.myToken
  }
  )
}


checkOut(cartId:string|null , orderInfo:object):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200` ,
  {
    shippingAddress :orderInfo
  },
  {
    headers:this.myToken
  }
  )
}




}