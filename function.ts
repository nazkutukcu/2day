function add(a:number,b:number):number{
    return a+b;
}
console.log(add(1,2));

let add_anonymous= function(a:number,b:number):number {
    return a+b;
}
add_anonymous(5,6);

let add_anonymous_type2 = (a:number,b:number):number =>{return a+b};
let add_anonymous_type3 = (a:number,b:number):number => a+b;

//parametresiz func
let add_anonymous_type4 =()=> console.log("boş method")

function add3(x:number,y:number,...a:number[]){
    var sum=0;
    a.forEach(x=>{
        sum+=x;
    })
    return sum;
}
//default parameters
function calculate(a:number,b:number,c:number=6):number{
    return a+b+c;
}
calculate(2,4);
calculate(2.5,7)
console.log(add3(2,3,4,5,6));
