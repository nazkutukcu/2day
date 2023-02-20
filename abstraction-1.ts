//Abstraction : Dependency Inversion P, Inversion Of Control P


//Low Level Module
class JuniorDevMaas implements IMaasHesapla{
                
    maasHesapla():number{
      return 10000; //junior'ın net maaş miktarı
    }
    
}

class AnaylistMaas implements IMaasHesapla{
                
    maasHesapla():number{
      return 40000; //analisr'ın net maaş miktarı
    }
    
}
class SeniorDevMaas implements IMaasHesapla{
                
    maasHesapla():number{
      return 50000; //senior'ın net maaş miktarı
    }
    
}


interface IMaasHesapla{
    maasHesapla(): number;
}

 //High Level Module
class BrutMaasHesaplama {  
    
    juniorMaas:IMaasHesapla;
    constructor(juniorMaas:IMaasHesapla){
        this.juniorMaas=juniorMaas;
    }
    maasHesapla(): number {
   
       return this.juniorMaas.maasHesapla()+1400;     //brüt maaş miktarı olduğu için toplam kesintiyi(Sosyal Güvenlik Primi,Gelir Vergisi...) ekledim.

    }

}

var brutMaas: BrutMaasHesaplama = new BrutMaasHesaplama(new JuniorDevMaas());

console.log(`Brüt Maaşınız: ${brutMaas.maasHesapla()}`);