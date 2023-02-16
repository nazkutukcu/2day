//Dependency Inversion p 
//inversion of control p ,ikisi beraber kullanılır
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.method1 = function () {
        return 10;
    };
    B.prototype.method2 = function () { };
    B.prototype.method3 = function () { };
    B.prototype.method4 = function () { };
    B.prototype.method5 = function () { };
    return B;
}());
var Btype2 = /** @class */ (function () {
    function Btype2() {
    }
    Btype2.prototype.method1 = function () {
        return 20;
    };
    Btype2.prototype.method2 = function () {
        throw new Error("Method not implemented.");
    };
    return Btype2;
}());
var A = /** @class */ (function () {
    function A(b) {
        this.b = b;
    }
    A.prototype.method1 = function () {
        //let b:B=new B();   
        //return b.method1()+90;  
        return this.b.method1() + 10;
    };
    return A;
}());
var a = new A(new Btype2()); //A nesnesine nesne B örn verdik
console.log(a.method1());
