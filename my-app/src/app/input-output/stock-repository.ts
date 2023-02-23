
import { Injectable } from "@angular/core";
import { Stock } from "./models/stock";
@Injectable({
  providedIn: 'root'
})
export class StockRepository {
    private stockList: Stock[] = [];

  load() {
    this.stockList.push({
      id: 1,
      name: 'kalem 1',
      category: 'kalemler',
      color: 'kırmızı',
      NumberOfstock:1
    });
    this.stockList.push({
      id: 2,
      name: 'kalem 2',
      category: 'kalemler',
      color: 'mavi',
      NumberOfstock:2
    });
    this.stockList.push({
      id: 3,
      name: 'kalem 3',
      category: 'kalemler',
      color: 'yeşil',
      NumberOfstock:3
    });
  }
  constructor() {
    this.load();
  }

  getList(): ReadonlyArray<Stock> {
    return this.stockList as ReadonlyArray<Stock>;
  }

  getById(id: number) {
    return this.stockList.find((x) => x.id == id);
  }

  add(newProduct: Stock) {
    this.stockList.push(newProduct);
  }

  update(updateStock: Stock) {
    let stockIndexUpdate = this.stockList.findIndex(
      (x) => x.id == updateStock.id
    );

    this.stockList[stockIndexUpdate].name = updateStock.name;
    this.stockList[stockIndexUpdate].category = updateStock.category;
    this.stockList[stockIndexUpdate].color = updateStock.color;
    this.stockList[stockIndexUpdate].NumberOfstock = updateStock.NumberOfstock;
  }
  delete(id: number) {
    //1.way
    this.stockList = this.stockList.filter((x) => x.id != id);

    // 2.way

    // let productIndexToDelete = this.productList.findIndex(x => x.id == id);
    // this.productList.splice(productIndexToDelete, 1);
  }


}
