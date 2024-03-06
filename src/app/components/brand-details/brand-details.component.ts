import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { brands } from 'src/app/shared/interfaces/brands';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.css']
})
export class BrandDetailsComponent implements OnInit {
brandId:any=''
  brandDetails: brands ={
    _id: '',
    name: '',
    slug: '',
    image: '',
    createdAt: '',
    updatedAt: '',
    __v: 0
  }
  constructor( private _EcomdataService:EcomdataService , private _ActivatedRoute:ActivatedRoute){}
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
this.brandId=params.get('id')


    }
  })
  this._EcomdataService.getbrandDetails(this.brandId).subscribe({
    next:(res)=>{
console.log(res);
this.brandDetails=res.data
console.log('de',this.brandDetails);


    }
  })
}
}
