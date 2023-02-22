namespace lsp2 { //dikdörtgen,kare


    interface IShape {
        getArea(): number;   //ortak olmayan fonksiyon çünkü kare de tek kenar alınması yeterli oluyor. Bu yüzden farklı, içi doldurulucak.
    }

    class Rectangles {
        shapyeType() {
            console.log("bir dikdörtgendir");   //kare ve dikdörtgen ortak özelliği
        }

    }

    class Rectangle extends Rectangles implements IShape {

        heigh: number;
        width: number;
        constructor(heigh: number, width: number) {
            super();
            this.heigh = heigh;
            this.width = width;
        }
        getArea(): number {
            return this.heigh * this.width;
        }


    }

    class Square extends Rectangles implements IShape {
        side: number;
        constructor(side: number) {
            super()
            this.side = side;
        }
        getArea(): number {
            return this.side * this.side;
        }

    }

    let rect:Rectangles;

    rect=new Square(10);
    rect.shapyeType();
    
    if(rect instanceof Square){
       console.log(`karenin alanı: ${(rect as Square).getArea()}`) ;  //cast ettiğimizde getArea methoduna eriştik
    }
    
    rect= new Rectangle(10,12);
    rect.shapyeType();
    if(rect instanceof Rectangle){
        console.log(`dikdörtgenin alanı: ${(rect as Rectangle).getArea()}`) ;  //cast ettiğimizde getArea methoduna eriştik
    }



    /*
    //wrong way

    class Rectangle{

       heigh:number;
       width:number;
       constructor(heigh:number,width:number)
       {
           this.heigh=heigh;
           this.width=width;
       }

        getArea() {
        return this.width * this.heigh;
      }

    }

    class Square extends Rectangle{
        side:number;
        constructor(side:number){
            super(side,side)
        }
           
    }

    // Karede bir dikdörtgendir ama alan hesabında heigh=20 verdiğimizde çıktı 200 oluyor ama 400 olması gerekir. 
   
    const rect: Rectangle = new Square(10); 
    rect.heigh=20;

    console.log(rect.getArea());

*/

}