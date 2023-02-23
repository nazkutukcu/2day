import { Injectable } from '@angular/core';
import { Stock } from './models/stock';
import { StockRepository } from './stock-repository';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(private stockRepository: StockRepository,) { }

  getAll(): ReadonlyArray<Stock> {
    let stockList: Stock[] = [];

    this.stockRepository.getList().forEach((p) => {
      stockList.push({
        id: p.id,
        name: p.name.toUpperCase(),
        category: p.category,
       
        color: p.color,
        NumberOfstock:p.NumberOfstock,
      });
    });

    return stockList as ReadonlyArray<Stock>;
  }

  getById(id: number): Stock | undefined {
    return this.stockRepository.getById(id);
  }

  add(stock: Stock) {
    this.stockRepository.add(stock);
  }

}
