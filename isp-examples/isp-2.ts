
/* wrong way

interface IToDoList{
   doMyHomework();
   learnNewTechnologies();
   readBook();
   workTypeScript();
   watchMovie();
   doingYoga(); 
}
*/

//good way

interface IdoMyHomework{
    doMyHomework();
}
interface ILearnNewTechnologies{
    learnNewTechnologies();
}
interface IreadBook{
    readBook();
}
interface IworkTypeScript{
    workTypeScript();
}
interface IwatchMovie{
    watchMovie();
}
interface IdoingYoga{
    doingYoga();
}

class ToDoList1 implements IdoMyHomework, IreadBook,IworkTypeScript ,IwatchMovie{
    watchMovie() {
        console.log("film izle")
    }
    workTypeScript() {
       console.log("TypeScript çalış")
    }
    readBook() {
        console.log("Kitap oku");
    }
    doMyHomework() {
        console.log("Ödevi yap");
    }

}

class ToDoList2 implements ILearnNewTechnologies,IdoMyHomework,IdoingYoga,IreadBook{
    readBook() {
        console.log("Kitap oku");
    }
    doingYoga() {
        console.log("Yoga yap");
    }
    doMyHomework() {
        console.log("Ödevi yap");
    }
    learnNewTechnologies() {
        console.log("Yeni teknolojileri araştır");
    }

}

var toDoList1= new ToDoList1();
toDoList1.doMyHomework();
toDoList1.readBook();
toDoList1.watchMovie();
toDoList1.workTypeScript();

console.log("-----------------------------------------------------");

var toDoList2= new ToDoList2();
toDoList2.doMyHomework();
toDoList2.doingYoga();
toDoList2.learnNewTechnologies();
toDoList2.readBook();



