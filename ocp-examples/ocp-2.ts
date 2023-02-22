namespace ocp2 {

    // Calory Calculator

    enum Food {
        Pizza,
        Cake,
        Baklava
    }
    interface ICaloryCalculate {
        calculate(piece: number): number;
    }

    class PizzaCaloryCalculate implements ICaloryCalculate {
        calculate(piece: number): number {
            return piece * 285;
        }
    }

    class CakeCaloryCalculate implements ICaloryCalculate {
        calculate(piece: number): number {
            return piece * 129;
        }
    }


    class BaklavaCaloryCalculate implements ICaloryCalculate {
        calculate(piece: number): number {
            return piece * 165;
        }
    }

    class CaloryCalculate {


        calculateGood(piece: number, caloryCalculate: ICaloryCalculate) {

            return caloryCalculate.calculate(piece);
        }


        calculateBad(piece: number, food: Food): number {

            let totalCalory = 0;
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


        }

    }

    

    interface ICaloryCalculateKeyValue {
     
        food: Food;
        CaloryCalculate: ICaloryCalculate;
    }

    let externalFood = Food.Pizza;
    let externalPiece = 5;


    let caloryArray: ICaloryCalculateKeyValue[] = [];
    caloryArray.push({food:Food.Pizza,CaloryCalculate:new PizzaCaloryCalculate()});
    caloryArray.push({food:Food.Cake,CaloryCalculate:new CakeCaloryCalculate()});
    caloryArray.push({food:Food.Baklava,CaloryCalculate:new BaklavaCaloryCalculate()});

   

    let currentCaloryCalculate = caloryArray.find(x => x.food == externalFood);

    console.log(currentCaloryCalculate?.CaloryCalculate.calculate(externalFood));

    

   



    /*
    var caloryCal = new CaloryCalculate();
    //console output with good way

    console.log(`toplam kalori: ${caloryCal.calculateGood(2, new PizzaCaloryCalculate())} kalori`)
    console.log(`toplam kalori: ${caloryCal.calculateGood(3, new CakeCaloryCalculate())} kalori`)

    //console output with bad way

    console.log(` toplam kalori : ${caloryCal.calculateBad(2, Food.Pizza)} kalori`)
    console.log(` toplam kalori : ${caloryCal.calculateBad(3, Food.Cake)} kalori`)
*/

  




























}