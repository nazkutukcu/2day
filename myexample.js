var Stock = /** @class */ (function () {
    function Stock(s_id, s_name, s_price) {
        this.s_id = s_id;
        this.s_name = s_name;
        this.s_price = s_price;
    }
    return Stock;
}());
var StockRepository = /** @class */ (function () {
    function StockRepository() {
    }
    StockRepository.prototype.GetStock = function () {
        // sql server
        var stockList = [];
        stockList.push(new Stock(1, 'defter 1', 100));
        stockList.push(new Stock(2, 'defter 2', 200));
        stockList.push(new Stock(3, 'defter 3', 300));
        return stockList;
    };
    return StockRepository;
}());
var StockService = /** @class */ (function () {
    function StockService(StockRepository) {
        this._kdv = 1.19;
        this._iStockRepository = StockRepository;
    }
    StockService.prototype.GetStock = function () {
        var _this = this;
        var newStockList = [];
        this._iStockRepository.GetStock().forEach(function (x) {
            newStockList.push(new Stock(x.s_id, x.s_name, x.s_price * _this._kdv));
        });
        return newStockList;
    };
    return StockService;
}());
var StockFactory = /** @class */ (function () {
    function StockFactory() {
    }
    StockFactory.prototype.CreateRepository = function () {
        return new StockRepository();
    };
    return StockFactory;
}());
var stockService = new StockService(new StockFactory().CreateRepository());
stockService.GetStock().forEach(function (x) {
    console.log("".concat(x.s_id, " ").concat(x.s_name, " ").concat(x.s_price));
});
