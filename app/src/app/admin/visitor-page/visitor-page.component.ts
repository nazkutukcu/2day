import { Component } from '@angular/core';
import { VisitorStateService } from 'src/app/visitor-state.service';

@Component({
  selector: 'app-visitor-page',
  templateUrl: './visitor-page.component.html',
  styleUrls: ['./visitor-page.component.css']
})
export class VisitorPageComponent {

  constructor(public visitorStateService:VisitorStateService){}

  isChecked: boolean = false;
  isDisabled:boolean = false;
 
  checkValue(event: any){
    this.isChecked =  !this.isChecked;
    this.isDisabled = true;
   
    
 }

}
