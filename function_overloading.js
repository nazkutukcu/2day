var SalaryCalculate = /** @class */ (function () {
    function SalaryCalculate() {
    }
    SalaryCalculate.prototype.getSalary = function (a, b) {
        if (typeof (a) == "number") {
            return 5;
        }
        return "salary";
    };
    return SalaryCalculate;
}());
var calculateSalary = new SalaryCalculate();
console.log(calculateSalary.getSalary(1, 2)); //5 değeri dönüyor
console.log(calculateSalary.getSalary("ajmet", "mehmet")); //salary
