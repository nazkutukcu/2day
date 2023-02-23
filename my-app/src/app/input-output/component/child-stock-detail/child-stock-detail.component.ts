import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-child-stock-detail',
  templateUrl: './child-stock-detail.component.html',
  styleUrls: ['./child-stock-detail.component.css']
})
export class ChildStockDetailComponent {
  @Input() selectedStock:Stock | undefined;
  @Output() closeEventClick= new EventEmitter();
  
  close(){
    this.closeEventClick.emit();
    
  }

}
