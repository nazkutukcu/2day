//Interface Segregation Principle (ISP)
//Sınıflar, kullanmadığı metotları içeren arayüzleri uygulamaya zorlanmamalıdır. 
/*
wrong way

interface IStudentRepository1
{
    getAll();
    getById(id:number);
    addNewStudent();
    deleteStudent();

}
*/
var isp1;
(function (isp1) {
    var StudentRepository1 = /** @class */ (function () {
        function StudentRepository1() {
        }
        StudentRepository1.prototype.addNewStudent = function () {
            console.log("yeni öğrenci eklendi");
        };
        StudentRepository1.prototype.deleteStudent = function () {
            console.log("öğrenci silindi");
        };
        StudentRepository1.prototype.getAll = function () {
            console.log("Öğrenci listesi göster");
        };
        StudentRepository1.prototype.getById = function (id) {
            console.log("".concat(id, " numaral\u0131 \u00F6\u011Frencinin bilgilerini g\u00F6ster"));
        };
        return StudentRepository1;
    }());
    var StudentRepository2 = /** @class */ (function () {
        function StudentRepository2() {
        }
        StudentRepository2.prototype.getAll = function () {
            console.log("Öğrenci listesi göster");
        };
        StudentRepository2.prototype.getById = function (id) {
            console.log("".concat(id, " numaral\u0131 \u00F6\u011Frencinin bilgilerini g\u00F6ster"));
        };
        return StudentRepository2;
    }());
    var studentRepository1 = new StudentRepository1();
    studentRepository1.addNewStudent();
    studentRepository1.deleteStudent();
    studentRepository1.getAll();
    studentRepository1.getById(8);
    console.log("--------------------------------------------");
    var studentRepository2 = new StudentRepository2();
    studentRepository2.getAll();
    studentRepository2.getById(9);
})(isp1 || (isp1 = {}));
