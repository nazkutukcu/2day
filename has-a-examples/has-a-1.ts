//Has-a
//Var olan kodu bozmadan yeni diller öğrenmeyi dinamik hale getiriyoruz.
namespace hasA1{
    
interface ILearnEnglish {
    learnEnglish(): void
}
interface ILearnGerman {
    learnGerman(): void
}
interface ILearnTypescript{
    learnTypeScript():void
}

class LearnEnglishType1 implements ILearnEnglish {     
    learnEnglish(): void {                     
        console.log("İngilizce seviyesi: Beginner")
    }
   
}
class LearnEnglishType2 implements ILearnEnglish {
    learnEnglish(): void {
        console.log("İngilizce seviyesi: Intermediate")
    }
   
}
class LearnEnglishType3 implements ILearnEnglish {
    learnEnglish(): void {
        console.log("İngilizce seviyesi: Advanced ")
    }
   
}

class LearnGermanType1 implements ILearnGerman {
    learnGerman(): void {
        console.log("Almanca seviyesi: Beginner")
    }
   
}
class LearnGermanType2 implements ILearnGerman {
    learnGerman(): void {
        console.log("Almanca seviyesi: Intermadiate")
    }
   
}
class LearnGermanType3 implements ILearnGerman {
    learnGerman(): void {
        console.log("Almanca seviyesi: Advanced")
    }
   
}

abstract class LearnLanguage{
    public _learnEnglish: ILearnEnglish;
    public _learnGerman: ILearnGerman;
    constructor(learnEnglish: ILearnEnglish, learnGerman: ILearnGerman) {
        this._learnEnglish = learnEnglish;
        this._learnGerman = learnGerman;
    }

    SetLearnEngOrGerman(learnEnghish: ILearnEnglish, learnGerman: ILearnGerman) {
        this._learnEnglish = learnEnghish;
        this._learnGerman = learnGerman;
    }

    learnTypeScript(): void {
        console.log("typeScript çalışıyorum")
    }
    learnEnglish(): void {
        this._learnEnglish.learnEnglish();
    }
    learnGerman(): void {
        this._learnGerman.learnGerman()
    }
   

}


class Student1 extends LearnLanguage {

}
class Student2 extends LearnLanguage {

}


var student1 = new Student1(new LearnEnglishType2(), new LearnGermanType3());
student1.learnEnglish();
student1.learnGerman();

console.log("---------------------------------------------------------------")

student1.SetLearnEngOrGerman(new LearnEnglishType1(),new LearnGermanType1());
student1.learnEnglish();
student1.learnGerman();

}
