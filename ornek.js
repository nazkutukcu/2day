var StockType;
(function (StockType) {
    StockType[StockType["High"] = 0] = "High";
    StockType[StockType["Low"] = 1] = "Low";
    StockType[StockType["Mid"] = 2] = "Mid";
})(StockType || (StockType = {}));
class HighStockCalculate {
    calculate(stock) {
        return stock * 10;
    }
}
class LowStockCalculate {
    calculate(stock) {
        return stock * 10;
    }
}
class MidStockCalculate {
    calculate(stock) {
        return stock * 7;
    }
}
class StockCalculate {
    CalculateGood(stock, stockCalculate) {
        return stockCalculate.calculate(stock);
    }
    //bad
    CalculateBad(stock, stockType) {
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
let extarnalStockType = StockType.High;
let extarnalStock = 2000;
let stockArray = [];
stockArray.push({ stockType: StockType.High, StockCalculate: new HighStockCalculate() });
stockArray.push({ stockType: StockType.Mid, StockCalculate: new MidStockCalculate() });
stockArray.push({ stockType: StockType.Low, StockCalculate: new LowStockCalculate() });
let currentStockCalculate = stockArray.find(x => x.stockType == extarnalStockType);
console.log(currentStockCalculate === null || currentStockCalculate === void 0 ? void 0 : currentStockCalculate.StockCalculate.calculate(extarnalStock));
let stockCalculate = new StockCalculate();
console.log(`${stockCalculate.CalculateGood(1000, new HighStockCalculate)}`);
console.log(`${stockCalculate.CalculateGood(1000, new LowStockCalculate)}`);
console.log(`${stockCalculate.CalculateBad(1000, StockType.High)}`);
console.log(`${stockCalculate.CalculateBad(1000, StockType.Low)}`);
