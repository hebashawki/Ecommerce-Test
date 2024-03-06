import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class EcomdataService {

  constructor(private _HttpClient:HttpClient) { }

getCategories():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
}
getCategoriesDetails(id:string|null):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
}
getBrands():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
}
getbrandDetails(id:any):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
}


  getAllProducts(pageNum:number =1 ):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pageNum}`)

  }
getProductDetails(id:string):Observable<any>{
 return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}
getCategory():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')

}

}
