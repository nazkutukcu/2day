class ProductService{  //high level

    _productRepository:IProductRepository
    constructor(productRepository:IProductRepository){
        this._productRepository=productRepository
    }
    Add(data:string){
        this._productRepository.addToLog(data);

    }
}
class ProductRepositoryWithOracle implements IProductRepository{
    addToLog(data: string) {
        console.log(`${data} {oracle}`)
    }
}

//interface
interface IProductRepository{
    addToLog(data:string)
}

class ProductRepository implements IProductRepository{
    addToLog(data: string) {
        console.log(data);
    }

}

let productService = new ProductService(new ProductRepositoryWithOracle());
productService.Add("LOG1")