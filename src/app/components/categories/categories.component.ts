import { Component, OnInit } from '@angular/core';
import { Categorys } from 'src/app/shared/interfaces/categorys';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit{
  categoryData:Categorys[]=[]
  constructor(private _EcomdataService:EcomdataService){}
ngOnInit(): void {
  this._EcomdataService.getCategories().subscribe({
next:(response)=>{
this.categoryData=response.data;
console.log(this.categoryData);

}
  })
}

  
}
