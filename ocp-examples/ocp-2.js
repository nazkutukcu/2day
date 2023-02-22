var ocp2;
(function (ocp2) {
    // Calory Calculator
    var Food;
    (function (Food) {
        Food[Food["Pizza"] = 0] = "Pizza";
        Food[Food["Cake"] = 1] = "Cake";
        Food[Food["Baklava"] = 2] = "Baklava";
    })(Food || (Food = {}));
    var PizzaCaloryCalculate = /** @class */ (function () {
        function PizzaCaloryCalculate() {
        }
        PizzaCaloryCalculate.prototype.calculate = function (piece) {
            return piece * 285;
        };
        return PizzaCaloryCalculate;
    }());
    var CakeCaloryCalculate = /** @class */ (function () {
        function CakeCaloryCalculate() {
        }
        CakeCaloryCalculate.prototype.calculate = function (piece) {
            return piece * 129;
        };
        return CakeCaloryCalculate;
    }());
    var BaklavaCaloryCalculate = /** @class */ (function () {
        function BaklavaCaloryCalculate() {
        }
        BaklavaCaloryCalculate.prototype.calculate = function (piece) {
            return piece * 165;
        };
        return BaklavaCaloryCalculate;
    }());
    var CaloryCalculate = /** @class */ (function () {
        function CaloryCalculate() {
        }
        CaloryCalculate.prototype.calculateGood = function (piece, caloryCalculate) {
            return caloryCalculate.calculate(piece);
        };
        CaloryCalculate.prototype.calculateBad = function (piece, food) {
            var totalCalory = 0;
            switch (food) {
                case Food.Pizza:
                    totalCalory = piece * 285;
                    break;
                case Food.Cake:
                    totalCalory = piece * 129;
                    break;
                default:
                    break;
            }
            return totalCalory;
        };
        return CaloryCalculate;
    }());
    var externalFood = Food.Pizza;
    var extarnalPiece = 5;
    var caloryArray = [];
    caloryArray.push({ food: Food.Pizza, CaloryCalculate: new PizzaCaloryCalculate() });
    caloryArray.push({ food: Food.Cake, CaloryCalculate: new CakeCaloryCalculate() });
    caloryArray.push({ food: Food.Baklava, CaloryCalculate: new BaklavaCaloryCalculate() });
    var currentCaloryCalculate = caloryArray.forEach(function (x) {
        console.log("".concat(Food[x.food], " ").concat(x.CaloryCalculate.calculate(extarnalPiece)));
    });
    /*
    var caloryCal = new CaloryCalculate();
    //console output with good way

    console.log(`toplam kalori: ${caloryCal.calculateGood(2, new PizzaCaloryCalculate())} kalori`)
    console.log(`toplam kalori: ${caloryCal.calculateGood(3, new CakeCaloryCalculate())} kalori`)

    //console output with bad way

    console.log(` toplam kalori : ${caloryCal.calculateBad(2, Food.Pizza)} kalori`)
    console.log(` toplam kalori : ${caloryCal.calculateBad(3, Food.Cake)} kalori`)
*/
})(ocp2 || (ocp2 = {}));
