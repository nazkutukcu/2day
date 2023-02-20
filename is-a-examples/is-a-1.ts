
namespace isA {


    abstract class LearnLanguage {

        learnTypeScript(): void { }

        abstract learnEnglish(): void

        abstract learnGerman(): void

    }

    class Student1 extends LearnLanguage {
        learnEnglish(): void {
            console.log("İngilizce çalışıyor")
        }
        learnGerman(): void {
            console.log("Almanca çalışıyor")
        }

    }

    class Student2 extends LearnLanguage {
        learnEnglish(): void {
            console.log("ingilizce çalışıyor")
        }
        learnGerman(): void {
            console.log("ingilizce çalışıyor, level:intermadiate")
        }

    }

    class Student3 extends LearnLanguage {
        learnEnglish(): void {
            console.log("ingilizce çalışıyor, level:advanced")
        }
        learnGerman(): void {
            console.log("almanca çalışıyor")
        }

    }



    class EnglishTeacher extends LearnLanguage {
        learnEnglish(): void {
            throw new Error("yeniden öğrenemez")
        }
        learnGerman(): void {
            console.log("almanca çalışıyor")
        }


    }
}