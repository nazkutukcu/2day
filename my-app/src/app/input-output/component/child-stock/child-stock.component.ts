import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-child-stock',
  templateUrl: './child-stock.component.html',
  styleUrls: ['./child-stock.component.css']
})
export class ChildStockComponent {

  selectedId:number  | undefined;
  @Input() productList: 

  ReadonlyArray<Stock> | undefined;
  @Output() detailShowClick = new EventEmitter<number>();

  showDetail(id: number) {
    this.selectedId=id;
    this.detailShowClick.emit(this.selectedId);
  }
 

}