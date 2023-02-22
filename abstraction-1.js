//Abstraction : Dependency Inversion P, Inversion Of Control P
//Low Level Module
var JuniorDevMaas = /** @class */ (function () {
    function JuniorDevMaas() {
    }
    JuniorDevMaas.prototype.maasHesapla = function () {
        return 10000; //junior'ın net maaş miktarı
    };
    return JuniorDevMaas;
}());
var AnaylistMaas = /** @class */ (function () {
    function AnaylistMaas() {
    }
    AnaylistMaas.prototype.maasHesapla = function () {
        return 40000; //analist'in net maaş miktarı
    };
    return AnaylistMaas;
}());
var SeniorDevMaas = /** @class */ (function () {
    function SeniorDevMaas() {
    }
    SeniorDevMaas.prototype.maasHesapla = function () {
        return 50000; //senior'ın net maaş miktarı
    };
    return SeniorDevMaas;
}());
//High Level Module
var BrutMaasHesaplama = /** @class */ (function () {
    function BrutMaasHesaplama(juniorMaas) {
        this.juniorMaas = juniorMaas;
    }
    BrutMaasHesaplama.prototype.maasHesapla = function () {
        return this.juniorMaas.maasHesapla() + 1400; //brüt maaş miktarı olduğu için toplam kesintiyi(Sosyal Güvenlik Primi,Gelir Vergisi...) ekledim.
    };
    return BrutMaasHesaplama;
}());
var brutMaas1 = new BrutMaasHesaplama(new JuniorDevMaas());
var brutMaas2 = new BrutMaasHesaplama(new AnaylistMaas());
var brutMaas3 = new BrutMaasHesaplama(new SeniorDevMaas());
console.log("Junior Br\u00FCt Maa\u015F: ".concat(brutMaas1.maasHesapla()));
console.log("Analist Br\u00FCt Maa\u015F: ".concat(brutMaas2.maasHesapla()));
console.log("Senior Br\u00FCt Maa\u015F: ".concat(brutMaas3.maasHesapla()));
