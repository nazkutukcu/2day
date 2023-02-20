export class Product {

    /*
    //2.yol
    id:number| undefined;   
    name:string | undefined;
    //1.yol
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    */
   //property tanım en iyi yol:
   constructor(public id:number,public name:string,public price:number){

   }
}
