import { Stock } from "./models/stock";

export class StockRepository {
    private stockList: Stock[] = [];

  load() {
    this.stockList.push({
      id: 1,
      name: 'kalem 1',
      price: 100,
      category: 'kalemler',
      color: 'kırmızı',
      NumberOfStock:1
    });
    this.stockList.push({
      id: 2,
      name: 'kalem 2',
      price: 200,
      category: 'kalemler',
      color: 'mavi',
      NumberOfStock:2
    });
    this.stockList.push({
      id: 3,
      name: 'kalem 3',
      price: 300,
      category: 'kalemler',
      color: 'yeşil',
      NumberOfStock:3
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
}
