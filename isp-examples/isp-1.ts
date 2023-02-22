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
namespace isp1{

interface IReadStudentRepository
{
    getAll();
    getById(id:number);
}

interface IWriteStudentRepository
{
    addNewStudent();
    deleteStudent();
}

class StudentRepository1 implements IReadStudentRepository,IWriteStudentRepository{
    addNewStudent() {
        console.log("yeni öğrenci eklendi")
    }
    deleteStudent() {
        console.log("öğrenci silindi")
    }
    getAll() {
        console.log("Öğrenci listesi göster")
    }
    getById(id: number) {
        console.log(`${id} numaralı öğrencinin bilgilerini göster`)
    }

}
class StudentRepository2 implements IReadStudentRepository{
    getAll() {
        console.log("Öğrenci listesi göster")
    }
    getById(id: number) {
        console.log(`${id} numaralı öğrencinin bilgilerini göster`)      
    }
   

}

var studentRepository1= new StudentRepository1();
studentRepository1.addNewStudent();
studentRepository1.deleteStudent();
studentRepository1.getAll();
studentRepository1.getById(8);

console.log("--------------------------------------------")

var studentRepository2= new StudentRepository2();
studentRepository2.getAll();
studentRepository2.getById(9);



}