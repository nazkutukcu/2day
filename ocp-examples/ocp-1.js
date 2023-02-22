//Open-Close Principle (OCP)
//Belirlenen türk lirasını eklenen para birimlerine(CurrencyType) çevirir.
var ocp1;
(function (ocp1) {
    var CurrencyType;
    (function (CurrencyType) {
        CurrencyType[CurrencyType["Euro"] = 0] = "Euro";
        CurrencyType[CurrencyType["Dolar"] = 1] = "Dolar";
        CurrencyType[CurrencyType["Pound"] = 2] = "Pound";
    })(CurrencyType || (CurrencyType = {}));
    var TryToEuro = /** @class */ (function () {
        function TryToEuro() {
        }
        TryToEuro.prototype.calculate = function (amount) {
            return amount * 0.050;
        };
        return TryToEuro;
    }());
    var TryToDolar = /** @class */ (function () {
        function TryToDolar() {
        }
        TryToDolar.prototype.calculate = function (amount) {
            return amount * 0.053;
        };
        return TryToDolar;
    }());
    var TryToPound = /** @class */ (function () {
        function TryToPound() {
        }
        TryToPound.prototype.calculate = function (amount) {
            return amount * 0.044;
        };
        return TryToPound;
    }());
    var CurrencyConvert = /** @class */ (function () {
        function CurrencyConvert() {
        }
        //good way
        CurrencyConvert.prototype.calculateGood = function (amount, amountCalculate) {
            return amountCalculate.calculate(amount);
        };
        //bad way
        CurrencyConvert.prototype.calculateBad = function (amount, currencyType) {
            var sumAmount = 0;
            switch (currencyType) {
                case CurrencyType.Euro:
                    sumAmount = amount * 0.050;
                    break;
                case CurrencyType.Dolar:
                    sumAmount = amount * 0.053;
                    break;
                default:
                    break;
            }
            return sumAmount;
        };
        return CurrencyConvert;
    }());
    var currencyConvert = new CurrencyConvert();
    var externalCurrencyType = CurrencyType.Dolar;
    var extarnalAmount = 5000;
    var amountArray = [];
    amountArray.push({ currencyType: CurrencyType.Euro, currencyConvert: new TryToEuro() });
    amountArray.push({ currencyType: CurrencyType.Dolar, currencyConvert: new TryToDolar() });
    var _amountCalculate = amountArray.find(function (x) { return x.currencyType == externalCurrencyType; });
    console.log(_amountCalculate === null || _amountCalculate === void 0 ? void 0 : _amountCalculate.currencyConvert.calculate(extarnalAmount));
    currencyConvert.calculateGood(90, new TryToDolar());
    /*
    //console output with good way
    
    console.log(`girilen türk lirasının euro karşılığı: ${currencyConvert.calculateGood(1000, new TryToEuro())} euro`)
    console.log(`girilen türk lirasının dolar karşılığı: ${currencyConvert.calculateGood(1000, new TryToDolar())} dolar`)
    
    //console output with bad way
    
    console.log(` girilen türk lirasının euro karşılığı : ${currencyConvert.calculateBad(1000, CurrencyType.Euro)} euro`)
    console.log(` girilen türk lirasının dolar karşılığı : ${currencyConvert.calculateBad(1000, CurrencyType.Dolar)} dolar`)
    */
})(ocp1 || (ocp1 = {}));
