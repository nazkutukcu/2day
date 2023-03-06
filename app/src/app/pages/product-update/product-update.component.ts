import { Component } from '@angular/core';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {

  constructor(private stateService:StateService){}


  update():void{
    let productIndexToUpdate=this.stateService.productList.findIndex(x=>x.id==2)

    this.stateService.productList[productIndexToUpdate].name="kalem 200"

    this.stateService.productList[productIndexToUpdate].price=200
  }

}
