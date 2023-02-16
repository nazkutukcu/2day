//Dependency Inversion p 
//inversion of control p ,ikisi beraber kullanılır

class B implements IB {   //low level module
    method1(): number {
       return 10;
    }   
   

    id:number;
    method2(){}
    method3(){}
    method4(){}
    method5(){}
   
}

class Btype2 implements IB{
    method1(): number {
        return 20 ;
    }
    method2() {
        throw new Error("Method not implemented.");
    }

}

interface IB{ 
    method1():number;
    method2();
}

class A{     //a classının b classına bağımlılığı var ,high level module

    b:IB;
    
    constructor(b:IB){
        this.b=b;
    }
    
    method1():number{  //yeni bir feature eklemek istediğimizde hesaplama fonk değişiklik yapmak sürdürülebilr değil,dışarıdan değişiklik olmalı
        //let b:B=new B();   
       //return b.method1()+90;  
       return this.b.method1()+10 ;
}

}

var a:A=new A(new Btype2()); //A nesnesine nesne B örn verdik
console.log(a.method1());
