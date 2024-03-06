import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorys } from 'src/app/shared/interfaces/categorys';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute , private _EcomdataService:EcomdataService){}
categoryId:string |null=''
categoryDetails :Categorys={
  name: '',
  image: ''
}
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(parms)=>{
  this.categoryId= parms.get('id')
    }
  })
  this._EcomdataService.getCategoriesDetails(this.categoryId).subscribe({
    next:(res)=>{
console.log(res);
this.categoryDetails=res.data
console.log(this.categoryDetails);



    }
  })
}
}
