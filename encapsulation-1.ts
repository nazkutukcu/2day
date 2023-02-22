//Encapsulation  : Access Modifiers, Getter/Setter

"use strict";
namespace encapsulation1{

/*
class Book{
    kitapAdi:string;
    yazar:string;
    sayfaSayisi:number;

    constructor(kitapAdi:string,yazar:string,sayfaSayisi:number){

        this.kitapAdi=kitapAdi;
        this.yazar=yazar;
        this.sayfaSayisi=sayfaSayisi;

    }
}


//Sayfa sayısı değişkeni default olarak public olduğundan, sayfa sayısına -10 tanımlayabildim ve bu anlamsızlığa yol açtı. Bu yüzden kapsülleme yapmamız önemlidir.

var book = new Book("Gurur ve Önyargı","Jane Austin",-10);   
                                                            
*/


class Book{
    kitapAdi: string;
    yazar:string;
    private sayfaSayisi:number;    //private olarak tanımladım.

    constructor(kitapAdi:string,yazar:string){

        this.kitapAdi=kitapAdi;
        this.yazar=yazar;
    }

    setSayfaSayisi(sayfaSayisi){
        if(sayfaSayisi>0){
            this.sayfaSayisi=sayfaSayisi;
        }
        else{
            throw "Sayfa sayısı 0'dan küçük olamaz";
        }
       
    }
    getSayfaSayisi(){
        return this.sayfaSayisi;
    }

}

var book= new Book("Gurur ve Önyargı","Jane Austin");
book.setSayfaSayisi(424);
console.log(book.getSayfaSayisi());

//hata oluşur
book.setSayfaSayisi(-10);
console.log(book.getSayfaSayisi());


}
