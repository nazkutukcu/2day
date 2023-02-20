//Liskov Substitution Principle (LSP)

namespace lsp1{

//CORRECT WAY
interface IFly{  //ortak olmayan method interface de bulunmalı
    fly();
    
}
class Birds {
    layEgg() {
        console.log("yumurtlar");   //bütün kuşların ortak özelliği
    }
    
}
class FlyingBirds extends Birds implements IFly{
      fly(){
        console.log("uçabilirler")
      }
}

class SwimmingBirds extends Birds  {
    fly(){
        throw new Error("uçamazlar");
      }
}

let bird:Birds;

bird=new FlyingBirds();
bird.layEgg();

if(bird instanceof FlyingBirds){
    (bird as FlyingBirds).fly();  //cast ettiğimizde fly methoduna eriştik
}

bird= new SwimmingBirds();
bird.layEgg();
if(bird instanceof SwimmingBirds){
    (bird as SwimmingBirds).fly;  //cast ettiğimizde fly methoduna eriştik
}

//WRONG WAY
/*
   class Birds{
    fly(){
        //
    }
   }
   class eagle extends Birds{
      dive(){
        //
      }
   }
   class penguin extends Birds{
    //penguenler uçamaz
   }

*/

}
