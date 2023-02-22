import { Component } from '@angular/core';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-parent-stock',
  templateUrl: './parent-stock.component.html',
  styleUrls: ['./parent-stock.component.css']
})
export class ParentStockComponent {

  stockList: ReadonlyArray<Stock>;
  selectedStock: Stock | undefined;
  constructor(
    /*
    servis 
    */
  ) {
    this.stockList = this.stockList.getAll();

   // servis get all
  }

  get toggleProductDetail() {
    return this.selectedStock != undefined;
  }

  showDetail(productId: number) {
   // this.selectedStock = this.selectedStock.getById(productId); servisten gelmeli
  }

}
