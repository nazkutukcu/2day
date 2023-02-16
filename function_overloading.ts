class SalaryCalculate{

public getSalary(a: number,b: number): number
public getSalary(a: string,b: string): string

public getSalary(a:any,b:any): number| string{
    if(typeof(a)== "number"){
        return 5;
    }
    return "salary";
} 
}

var calculateSalary=new SalaryCalculate();

console.log(calculateSalary.getSalary(1,2))  //5 değeri dönüyor
console.log(calculateSalary.getSalary("ahmet","mehmet")) //salary


