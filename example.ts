

class Product{
    id:number;
    name:string;
    price:number;

    constructor(id:number,name:string,price:number){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}

class ProductRepository implements IProductRepository{ //data logic


    GetAll():Product[]{
        let productList:Product[]=[];
        productList.push(new Product(1,"kalem 1",100));
        productList.push(new Product(1,"kalem 2",200));
        productList.push(new Product(1,"kalem 3",300));
        return productList;
       

    }
   
}

class ProductRepositoryWithOracle implements IProductRepository{
    GetAll():Product[]{
        let productList:Product[]=[];
        productList.push(new Product(1,"Orcaclekalem 1",100));
        productList.push(new Product(1,"Oraclekalem 2",200));
        productList.push(new Product(1,"Oraclekalem 3",300));
        return productList;
       

    }
}

class ProductService{  //business logic

    private _productRepository:IProductRepository
    readonly _kdv:number=1.19;

    constructor(_productRepository: IProductRepository){
        this._productRepository=new ProductFactory().CreateRepositoryWithOracle();
    }

    GetAll():Product[]{
        
        let newProductList:Product[] =[];
        this._productRepository.GetAll().forEach(x=>{
            newProductList.push(new Product(x.id,x.name,x.price*this._kdv))
        })
        return newProductList;
    }

}

//aradaki bağlantıyı koparmak için interface yazıyoruz
interface IProductRepository{
    GetAll(): Product[];
}

class ProductFactory{  
    public CreateRepository():IProductRepository{
        return new ProductRepository();  //
    }
    public CreateRepositoryWithOracle():IProductRepository{
        return new ProductRepositoryWithOracle();  //
    }
}

var productList=new ProductService(new ProductFactory().CreateRepositoryWithOracle());
productList.GetAll().forEach(x=>{
    console.log(`${x.id} ${x.name} ${x.price}`)
})

