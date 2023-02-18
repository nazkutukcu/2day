var SalaryType;
(function (SalaryType) {
    SalaryType[SalaryType["High"] = 0] = "High";
    SalaryType[SalaryType["Mid"] = 1] = "Mid";
    SalaryType[SalaryType["Low"] = 2] = "Low";
})(SalaryType || (SalaryType = {}));
var HighSalaryCalculate = /** @class */ (function () {
    function HighSalaryCalculate() {
    }
    HighSalaryCalculate.prototype.calculate = function (salary) {
        return salary * 10;
    };
    return HighSalaryCalculate;
}());
var LowSalaryCalculate = /** @class */ (function () {
    function LowSalaryCalculate() {
    }
    LowSalaryCalculate.prototype.calculate = function (salary) {
        return salary * 5;
    };
    return LowSalaryCalculate;
}());
var MidSalaryCalculate = /** @class */ (function () {
    function MidSalaryCalculate() {
    }
    MidSalaryCalculate.prototype.calculate = function (salary) {
        return salary * 7;
    };
    return MidSalaryCalculate;
}());
//Good
var SalaryCalculate = /** @class */ (function () {
    function SalaryCalculate() {
    }
    SalaryCalculate.prototype.CalculateGood = function (salary, salaryCalculate) {
        return salaryCalculate.calculate(salary);
        //calculatebad
    };
    return SalaryCalculate;
}());
var salaryCalculate = new SalaryCalculate();
var externalSalaryType = SalaryType.High;
var externalSalary = 2000;
var salaryArray = [];
salaryArray.push({ salaryType: SalaryType.High, SalaryCalculate: new HighSalaryCalculate() });
salaryArray.push({ salaryType: SalaryType.Mid, SalaryCalculate: new MidSalaryCalculate() });
salaryArray.push({ salaryType: SalaryType.Low, SalaryCalculate: new LowSalaryCalculate() });
var currentSalaryCalculate = salaryArray.find(function (x) { return x.salaryType == externalSalaryType; });
console.log(currentSalaryCalculate === null || currentSalaryCalculate === void 0 ? void 0 : currentSalaryCalculate.SalaryCalculate.calculate(externalSalary));
console.log("".concat(salaryCalculate.CalculateGood(1000, new HighSalaryCalculate)));
console.log("".concat(salaryCalculate.CalculateGood(1000, new LowSalaryCalculate)));
console.log("".concat(salaryCalculate.CalculateGood(1000, new MidSalaryCalculate)));
