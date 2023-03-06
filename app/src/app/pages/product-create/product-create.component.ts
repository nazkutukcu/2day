import { Component } from '@angular/core';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  productId = 0;
  constructor(private stateService:StateService){}

  add(){
    this.productId++;
    this.stateService.productList.push({id:this.productId,name:"kalem 1",price:200,isOk:false})
  }


}
