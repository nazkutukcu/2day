import { Component } from '@angular/core';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {

  constructor(private stateService:StateService){}
  delete():void{
    let index=this.stateService.productList.findIndex((x)=>x.id==2);
    this.stateService.productList.splice(index,1)
  }

}
