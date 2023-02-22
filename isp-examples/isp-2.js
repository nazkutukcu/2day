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
var ToDoList1 = /** @class */ (function () {
    function ToDoList1() {
    }
    ToDoList1.prototype.watchMovie = function () {
        console.log("film izle");
    };
    ToDoList1.prototype.workTypeScript = function () {
        console.log("TypeScript çalış");
    };
    ToDoList1.prototype.readBook = function () {
        console.log("Kitap oku");
    };
    ToDoList1.prototype.doMyHomework = function () {
        console.log("Ödevi yap");
    };
    return ToDoList1;
}());
var ToDoList2 = /** @class */ (function () {
    function ToDoList2() {
    }
    ToDoList2.prototype.readBook = function () {
        console.log("Kitap oku");
    };
    ToDoList2.prototype.doingYoga = function () {
        console.log("Yoga yap");
    };
    ToDoList2.prototype.doMyHomework = function () {
        console.log("Ödevi yap");
    };
    ToDoList2.prototype.learnNewTechnologies = function () {
        console.log("Yeni teknolojileri araştır");
    };
    return ToDoList2;
}());
var toDoList1 = new ToDoList1();
toDoList1.doMyHomework();
toDoList1.readBook();
toDoList1.watchMovie();
toDoList1.workTypeScript();
console.log("-----------------------------------------------------");
var toDoList2 = new ToDoList2();
toDoList2.doMyHomework();
toDoList2.doingYoga();
toDoList2.learnNewTechnologies();
toDoList2.readBook();
