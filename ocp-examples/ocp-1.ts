//Open-Close Principle (OCP)

//Belirlenen türk lirasını eklenen para birimlerine(CurrencyType) çevirir.
namespace ocp1{

enum CurrencyType {
    Euro,
    Dolar,
    Pound
}

interface ICurrencyConvert {           //all currency types classes implements ICurrencyConvert.
    calculate(amount: number): number;
}

class TryToEuro implements ICurrencyConvert {
    calculate(amount: number): number {
        return amount * 0.050;

    }

}

class TryToDolar implements ICurrencyConvert {
    calculate(amount: number): number {
        return amount * 0.053;
    }

}

class TryToPound implements ICurrencyConvert {
    calculate(amount: number): number {
        return amount * 0.044;
    }

}


class CurrencyConvert {

    //good way
    calculateGood(amount: number, amountCalculate: ICurrencyConvert) {

        return amountCalculate.calculate(amount);
    }

    //bad way
    calculateBad(amount: number, currencyType: CurrencyType): number {

        let sumAmount = 0;
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

    }

}

var currencyConvert = new CurrencyConvert();


//?????????
interface ICurrencyConvertKeyValue
{
 currencyType:CurrencyType;
 currencyConvert:ICurrencyConvert
}


  let externalCurrencyType=CurrencyType.Dolar;
  let extarnalAmount=5000;


  let amountArray:ICurrencyConvertKeyValue[]= [];

  amountArray.push({currencyType:CurrencyType.Euro,currencyConvert:new TryToEuro()})
  amountArray.push({currencyType:CurrencyType.Dolar,currencyConvert:new TryToDolar()})
  

  let _amountCalculate= amountArray.find(x=>x.currencyType==externalCurrencyType);
  console.log(_amountCalculate?.currencyConvert.calculate(extarnalAmount));


//??????????????



/*
//console output with good way

console.log(`girilen türk lirasının euro karşılığı: ${currencyConvert.calculateGood(1000, new TryToEuro())} euro`)
console.log(`girilen türk lirasının dolar karşılığı: ${currencyConvert.calculateGood(1000, new TryToDolar())} dolar`)

//console output with bad way

console.log(` girilen türk lirasının euro karşılığı : ${currencyConvert.calculateBad(1000, CurrencyType.Euro)} euro`)
console.log(` girilen türk lirasının dolar karşılığı : ${currencyConvert.calculateBad(1000, CurrencyType.Dolar)} dolar`)
*/

}
