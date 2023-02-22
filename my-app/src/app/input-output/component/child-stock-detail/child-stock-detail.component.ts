import { Component, Input } from '@angular/core';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-child-stock-detail',
  templateUrl: './child-stock-detail.component.html',
  styleUrls: ['./child-stock-detail.component.css']
})
export class ChildStockDetailComponent {
  @Input() selectedProduct:Stock | undefined;

}
