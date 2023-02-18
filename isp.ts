interface IProductRepository{    //2 parçaya ayırdık 
   /*
    getAll();
    getById(id:number);
    save(data:string);
    update(data:string);
    delete(id:number)
    */
}
interface IReadProductRepository{
    getAll();
    getById(id:number);

}
interface IWriteProductRepository{
    save(data:string);
    update(data:string);
    delete(id:number)
}
class ProductRepository2 implements IReadProductRepository,IWriteProductRepository
{
    update(data: string) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
    getById(id: number) {
        throw new Error("Method not implemented.");
    }
    save(data: string) {
        throw new Error("Method not implemented.");
    }
    uptdate(data: string) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }

}