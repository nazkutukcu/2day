enum StockType{
    High,
    Low,
    Mid
}
interface IStockCalculate {
    calculate(stock: number): number;
}
class HighStockCalculate implements IStockCalculate{
    calculate(stock: number): number {
        return stock * 10;
    }
}
class LowStockCalculate implements IStockCalculate{
    calculate(stock: number): number {
        return stock * 10;
    }
}
class MidStockCalculate implements IStockCalculate{
    calculate(stock: number): number {
        return stock * 7;
    }
}


class StockCalculate {
    CalculateGood(stock: number, stockCalculate: IStockCalculate) {
        return stockCalculate.calculate(stock);
          
        
}
//bad
CalculateBad(stock: number, stockType: StockType): number {

    let sumStock = 0;
    switch (stockType) {
        case StockType.High:
            sumStock = stock * 10;
            break;
        case StockType.Low:
            sumStock = stock * 5;
            break;
        default:
            break;
    }

    return sumStock;


}


}
interface IStockKeyValue
{
 stockType:StockType;
 StockCalculate:IStockCalculate
}
let extarnalStockType=StockType.High;
let extarnalStock=2000;


let stockArray:IStockKeyValue[]= [];

stockArray.push({stockType:StockType.High,StockCalculate:new HighStockCalculate()})
stockArray.push({stockType:StockType.Mid,StockCalculate:new MidStockCalculate()})
stockArray.push({stockType:StockType.Low,StockCalculate:new LowStockCalculate()})

let currentStockCalculate= stockArray.find(x=>x.stockType==extarnalStockType);
console.log(currentStockCalculate?.StockCalculate.calculate(extarnalStock));


let stockCalculate =new StockCalculate();
console.log(`${stockCalculate.CalculateGood(1000, new HighStockCalculate)}` );
console.log( `${stockCalculate.CalculateGood(1000, new LowStockCalculate)}`);

console.log(`${stockCalculate.CalculateBad(1000, StockType.High)}` );
console.log( `${stockCalculate.CalculateBad(1000, StockType.Low)}`);