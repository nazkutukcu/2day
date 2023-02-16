abstract class BaseVehicle{
    id:number;
    type:string;
    WriteLog(log:string):void{
        console.log(log)
    }
    abstract Method1(a:number):void;  //fonks gövdesini alt class doldurur (başına abst yazarsak)
}
class Car extends BaseVehicle{ 
    Method1(a: number): void {
        throw new Error("Method not implemented.");
    }

}
class Train extends BaseVehicle{
    Method1(a: number): void {
        throw new Error("Method not implemented.");
    }

}

var car1= new Car()
car1.id=1
car1.type="type 1"
car1.WriteLog("car 1 class")
var train1 =new Train();
train1.id=20;
train1.type="type 2";
train1.WriteLog("train 1 class")
