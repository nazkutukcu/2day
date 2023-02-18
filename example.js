var StockService = /** @class */ (function () {
    function StockService(stockRepository) {
        this._stockRepository = stockRepository;
    }
    StockService.prototype.Add = function (data) {
        this._stockRepository.addToLog(data);
    };
    return StockService;
}());
var StockRepository = /** @class */ (function () {
    function StockRepository() {
    }
    StockRepository.prototype.addToLog = function (data) {
        console.log(data);
    };
    return StockRepository;
}());
var stockService = new StockService(new StockRepository());
stockService.Add("LOG1");
