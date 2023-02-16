class Stock{
    s_id: number;
    s_name : string;
    s_price:number;

constructor(s_id:number,s_name:string,s_price:number){

    this.s_id=s_id;
    this.s_name=s_name;
    this.s_price=s_price;

}
}
class StockRepository implements IStockRepository {


    GetStock(): Stock[] {

        // sql server
        let stockList: Stock[] = [];
        stockList.push(new Stock(1, 'defter 1', 100))
        stockList.push(new Stock(2, 'defter 2', 200))
        stockList.push(new Stock(3, 'defter 3', 300))
        return stockList;

    }


}

interface IStockRepository {
    GetStock(): Stock[];
}

class StockService {

    private _iStockRepository: IStockRepository
    readonly _kdv: number = 1.19;

    constructor( StockRepository :IStockRepository) {

        this._iStockRepository = StockRepository;
    }

    GetStock(): Stock[] {
        let newStockList: Stock[] = [];


        this._iStockRepository.GetStock().forEach(x => {
            newStockList.push(new Stock(x.s_id, x.s_name, x.s_price * this._kdv));

        })
        return newStockList;
    }
}

class StockFactory {

    public CreateRepository(): IStockRepository {
        return new StockRepository();
    }

   
}

var stockService = new StockService(new StockFactory().CreateRepository());
stockService.GetStock().forEach(x => {
    console.log(`${x.s_id} ${x.s_name} ${x.s_price}`)
})
