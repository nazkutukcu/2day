//Interface Segregation Principle (ISP)

//Sınıflar, kullanmadığı metotları içeren arayüzleri uygulamaya zorlanmamalıdır. Bu yüzden interface'leri ayırıyoruz.

/*
wrong way

interface IStudentRepository
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

class StudentRepository implements IReadStudentRepository,IWriteStudentRepository{
    addNewStudent() {
        throw new Error("Method not implemented.");
    }
    deleteStudent() {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
    getById(id: number) {
        throw new Error("Method not implemented.");
    }

}

}