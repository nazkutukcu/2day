import { Product } from "./models/product";

export class ProductRepository {
   
    private productList:Product[]=[];

    load(){
        this.productList.push({ id: 1, name: 'kalem 1', price: 100, stock: 20, category: "kalemler", color: 'kırmızı' })
        this.productList.push({ id: 2, name: 'kalem 2', price: 200, stock: 40, category: "kalemler", color: 'mavi' })
        this.productList.push({ id: 3, name: 'kalem 3', price: 300, stock: 60, category: "kalemler", color: 'yeşil' })
    }  

    getList():ReadonlyArray<Product>{
        return this.productList as
        ReadonlyArray<Product>;
    }
    getById(id:number){
        return this.productList.find(x=>x.id==id)
    }
    add(newProduct:Product){
        this.productList.push(newProduct);
    }
    update(updateProduct:Product){
        let productIndexUpdate=this.productList.findIndex(x=>x.id==updateProduct.id)

        this.productList[productIndexUpdate].name=updateProduct.name;
        this.productList[productIndexUpdate].price=updateProduct.price;
        this.productList[productIndexUpdate].stock=updateProduct.stock;
        this.productList[productIndexUpdate].category=updateProduct.category; 
        this.productList[productIndexUpdate].color=updateProduct.color;
    }
    delete(id:number){
        //1.yol
        this.productList=this.productList.filter(x=>x.id!=id);
        //2.yol (siliceğimizin index'ini bularak)
        // let productIndexToDelete = this.productList.findIndex(x => x.id == id);
        // this.productList.splice(productIndexToDelete, 1);
    }
}
