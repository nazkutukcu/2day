//polymorphism

class User {
   
    name: string;
    country:string;
    price: number;
    
    calculatePrice() {
        return this.price;
    }
}

class GoldenUser extends User {

   
    calculatePrice() {

        var basePrice = super.calculatePrice();
        return basePrice * 4;
    }
}


class PremiumUser extends User {

   
    calculatePrice() {

        var basePrice = super.calculatePrice();
        return basePrice * 2;
    }
}

class NormalUser extends User {
  
    age: number;
    calculatePrice() {

       // var basePrice = super.calculatePrice();
        return 0 ;
    }
}

var premium = new PremiumUser();
premium.name="Naz";
premium.country="Türkiye";
premium.price=20;
console.log(`premium kullanıcı ücreti: ${premium.calculatePrice()} tl`)

var normal = new NormalUser();
normal.name="Mert";
normal.country="Türkiye";
normal.age=22;
normal.price=20;
console.log(`normal kullanıcı ücreti: ${normal.calculatePrice()} tl`);

var golden = new GoldenUser();
golden.name="Eda";
golden.country="Türkiye";
golden.price=20;
console.log(`golden kullanıcı ücreti: ${golden.calculatePrice()} tl`);

console.log("-----------------------------------------------------------------------------------");


let baseUser: User = premium;
console.log(`premium kullanıcı ücreti:${ baseUser.calculatePrice()} tl`)
baseUser = normal;
console.log(`normal kullanıcı ücreti::${baseUser.calculatePrice()} tl - age : ${(baseUser as NormalUser).age}`)
baseUser = golden;
console.log(` golden kullanıcı ücreti :${baseUser.calculatePrice()} tl`)











