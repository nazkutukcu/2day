//Encapsulation  : Access Modifiers, Getter/Setter
"use strict";
var encapsulation1;
(function (encapsulation1) {
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
    var Book = /** @class */ (function () {
        function Book(kitapAdi, yazar) {
            this.kitapAdi = kitapAdi;
            this.yazar = yazar;
        }
        Book.prototype.setSayfaSayisi = function (sayfaSayisi) {
            if (sayfaSayisi > 0) {
                this.sayfaSayisi = sayfaSayisi;
            }
            else {
                throw "Sayfa sayısı 0'dan küçük olamaz";
            }
        };
        Book.prototype.getSayfaSayisi = function () {
            return this.sayfaSayisi;
        };
        return Book;
    }());
    var book = new Book("Gurur ve Önyargı", "Jane Austin");
    book.setSayfaSayisi(424);
    console.log(book.getSayfaSayisi());
    //hata oluşur
    book.setSayfaSayisi(-10);
    console.log(book.getSayfaSayisi());
})(encapsulation1 || (encapsulation1 = {}));
