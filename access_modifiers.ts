//public private protected

class A{
    private name:string;   // nesne örneği üzerinden erişim yok.


    public method1():void{

    }
    protected age:number; //nesne örneği üzerinden erişim yok.
    private _count:number; // 1-100 arasında olacak
    private _count2:number;  //  50-250 arasında olacak


    //2.yol(get,set)
    public get count2(){ //get'i ve set'i aynı isim olucak (count2)
        return this._count2;
    }

    public set count2(a:number){
        if(a>50&& a<250){
            this._count2=a;
        }
        else{
            throw new Error("değer 50 ile 250 arasında olmalıdır")
        }
    }
    //1.way(get,set)
    public SetCount(number:number){
        if(number>1 && number<100){
            this._count=number;
        }
        else{
            throw new Error("değer 1 ile 100 arasında olmalı")
        }
    }
    public GetCount (){
        return this._count;
    }
}

//1.yol
var a1= new A();
a1.SetCount(50);
a1.GetCount();
a1.method1();

//2.yol
var a2= new A();
//a2.count2(60);  ?