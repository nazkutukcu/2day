import { Component } from '@angular/core';
import { Stock } from '../../models/stock';
import { StockServiceService } from '../../stock-service.service';

@Component({
  selector: 'app-parent-stock',
  templateUrl: './parent-stock.component.html',
  styleUrls: ['./parent-stock.component.css']
})
export class ParentStockComponent {

  productList: ReadonlyArray<Stock>;
  selectedStock: Stock | undefined;
  constructor(
    private stockService: StockServiceService,
    //private stockService2: RealProductAPIService
  ) {
    this.productList = this.stockService.getAll();

    //console.log(stockService2.getAll());
  }

  get toggleStockDetail() {
    return this.selectedStock != undefined;
  }

  showDetail(stockId: number) {
    this.selectedStock = this.stockService.getById(stockId);
  }

}
