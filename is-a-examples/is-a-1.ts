//is a
namespace isA {


    abstract class LearnLanguage {

        //learnTypeScript(): void { }     //eklersek dinamik olarak ekleyemeyiz.

        abstract learnEnglish(): void

        abstract learnGerman(): void

    }

    class Student1 extends LearnLanguage {
        learnEnglish(): void {
            console.log("İngilizce öğreniyor,level:beginner")
        }
        learnGerman(): void {
            console.log("Almanca öğreniyor,level:beginner")
        }

    }

    class Student2 extends LearnLanguage {
        learnEnglish(): void {
            console.log("ingilizce öğreniyor ,level:intermediate")
        }
        learnGerman(): void {
            console.log("ingilizce öğreniyor, level:intermadiate")
        }

    }

    class Student3 extends LearnLanguage {
        learnEnglish(): void {
            console.log("ingilizce öğreniyor, level:advanced")
        }
        learnGerman(): void {
            console.log("almanca öğreniyor,level :advanced")
        }

    }



    class EnglishTeacher extends LearnLanguage {
        learnEnglish(): void {
            throw new Error("yeniden öğrenemez")
        }
        learnGerman(): void {
            console.log("almanca öğreniyor")
        }


    }

    let student1 = new Student1();
    student1.learnEnglish();
    student1.learnGerman();

    console.log("------------------------------------")

    let student2 = new Student2();
    student2.learnEnglish();
    student2.learnGerman();

    console.log("------------------------------------")

    let student3 = new Student3();
    student3.learnEnglish();
    student3.learnGerman();

    console.log("------------------------------------")
    
    let englishTeacher= new EnglishTeacher();
    englishTeacher.learnEnglish();  //burdan error gelicek
    englishTeacher.learnGerman();
}