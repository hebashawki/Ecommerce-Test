import { Component } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.css']
})
export class BlankLayoutComponent {
  
  

  goToUp():void{
    scrollTo(0,0)
  }
}
