class StockService{
    _stockRepository:IStockRepository
    constructor(stockRepository:IStockRepository){
        this._stockRepository=stockRepository
    }
    Add(data:string){
        this._stockRepository.addToLog(data);

    }
}

interface IStockRepository{
  addToLog(data:string)
}
class StockRepository implements IStockRepository{
    addToLog(data: string) {
        console.log(data);
    }
   

}

let stockService = new StockService(new StockRepository());
stockService.Add("LOG1")