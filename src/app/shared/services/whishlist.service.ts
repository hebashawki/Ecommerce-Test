import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
//https://ecommerce.routemisr.com/api/v1/wishlist
export class WhishlistService {
  wishNumber:BehaviorSubject<number>= new BehaviorSubject(0)
  myToken:any={
    token : localStorage.getItem('etoken')
    
    
  }
  constructor(private _HttpClient:HttpClient) { }
  addToWhishlist(prodId:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      productId: prodId
  },
  {
    headers: this.myToken
    
  }
    )
  }
  getWhishlist():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
  
  {
    headers: this.myToken
    
  }
    )
  }
  removeWhishlist(prodId:any):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${prodId}`,
  
  {
    headers: this.myToken
    
  }
    )
  }
  updatewishCount(prodId:string , wishNumber:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/wishlist${prodId}`,
    {
      count: wishNumber
    },
    {
      headers:this.myToken
    })
}
}
