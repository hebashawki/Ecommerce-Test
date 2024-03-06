import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: any[] = [];
constructor(private _EcomdataService:EcomdataService , private _ActivatedRoute:ActivatedRoute){}
ngOnInit(): void {
  this._EcomdataService.getBrands().subscribe({
    next:(res)=>{
console.log('brand',res.data);
this.brands=res.data
console.log(this.brands);

    }
  })
}
}
