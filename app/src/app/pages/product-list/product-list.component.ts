import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  @Output() isOkClickEvent = new EventEmitter();

  constructor(private stateService: StateService) { }
  ngOnInit(): void {
    this.productList = this.stateService.productList;
  }

  
  isOk(id: number) {
    let productIndexToUpdate = this.productList.findIndex(x => x.id == id);

    this.productList[productIndexToUpdate].isOk = !this.productList[productIndexToUpdate].isOk;


    this.isOkClickEvent.emit();
    console.log(this.stateService.productList);

  }

}
