//Encapsulation  : Access Modifiers, Getter/Setter
"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var encapsulation;
(function (encapsulation) {
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
    
    
    //Değişkenler default olarak public olduğundan sayfa sayısına -10 tanımlayabildim ve bu anlamsızlığa yol açtı. Bu yüzden kapsülleme yapmamız önemlidir.
    
    var book = new Book("Gurur ve Önyargı","Jane Austin",-10);
                                                                
    */
    var _Book_sayfaSayisi;
    var Book = /** @class */ (function () {
        function Book(kitapAdi, yazar) {
            _Book_sayfaSayisi.set(this, void 0); //private olarak tanımladım.
            this.kitapAdi = kitapAdi;
            this.yazar = yazar;
        }
        Book.prototype.setSayfaSayisi = function (sayfaSayisi) {
            if (sayfaSayisi > 0) {
                __classPrivateFieldSet(this, _Book_sayfaSayisi, sayfaSayisi, "f");
            }
            else
                throw "Sayfa sayısı 0'dan küçük olamaz";
        };
        Book.prototype.getSayfaSayisi = function () {
            return __classPrivateFieldGet(this, _Book_sayfaSayisi, "f");
        };
        return Book;
    }());
    _Book_sayfaSayisi = new WeakMap();
    var book = new Book("Gurur ve Önyargı", "Jane Austin");
    book.setSayfaSayisi(424);
    book.getSayfaSayisi();
})(encapsulation || (encapsulation = {}));
