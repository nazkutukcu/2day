import { Component } from '@angular/core';
import { Stock } from '../../models/stock';


import { StockServiceService } from '../../stock-service.service';

@Component({
  selector: 'app-parent-stock',
  templateUrl: './parent-stock.component.html',
  styleUrls: ['./parent-stock.component.css']
})
export class ParentStockComponent {

  stockList: ReadonlyArray<Stock>;
  selectedStock: Stock | undefined;
 
  //private productService2: RealProductAPIService


constructor(
  private stockService: StockServiceService,
  //private productService2: RealProductAPIService
) {
  this.stockList = this.stockService.getAll();

  console.log(stockService.getAll());
}
get toggleStockDetail() {
  return this.selectedStock != undefined;
}

showDetail(selectedId: number) {
  this.selectedStock = this.stockService.getById(selectedId);
}
close(){
  this.selectedStock=undefined;
}
}
