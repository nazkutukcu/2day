enum SalaryType {
    High,
    Mid,
    Low
}
interface ISalaryCalculate {
    calculate(salary: number): number;
}
class HighSalaryCalculate implements ISalaryCalculate {
    calculate(salary: number): number {
        return salary * 10;
    }

}
class LowSalaryCalculate implements ISalaryCalculate {
    calculate(salary: number): number {
        return salary * 5;
    }


    
    }

    class MidSalaryCalculate implements ISalaryCalculate {
        calculate(salary: number): number {
            return salary * 7;
        }


}
//Good
class SalaryCalculate {
    CalculateGood(salary: number, salaryCalculate: ISalaryCalculate) {
        return salaryCalculate.calculate(salary);
        //calculatebad
        
    
    }
}

var salaryCalculate = new SalaryCalculate();
//Good
interface ISalaryKeyValue
{
 salaryType:SalaryType;
 SalaryCalculate:ISalaryCalculate
}


  let externalSalaryType=SalaryType.High;
  let externalSalary=2000;


  let salaryArray:ISalaryKeyValue[]= [];

  salaryArray.push({salaryType:SalaryType.High,SalaryCalculate:new HighSalaryCalculate()})
  salaryArray.push({salaryType:SalaryType.Mid,SalaryCalculate:new MidSalaryCalculate()})
  salaryArray.push({salaryType:SalaryType.Low,SalaryCalculate:new LowSalaryCalculate()})

  let currentSalaryCalculate= salaryArray.find(x=>x.salaryType==externalSalaryType);
  console.log(currentSalaryCalculate?.SalaryCalculate.calculate(externalSalary));




console.log(`${salaryCalculate.CalculateGood(1000, new HighSalaryCalculate)}` );
console.log( `${salaryCalculate.CalculateGood(1000, new LowSalaryCalculate)}`);
console.log( `${salaryCalculate.CalculateGood(1000, new MidSalaryCalculate)}`);