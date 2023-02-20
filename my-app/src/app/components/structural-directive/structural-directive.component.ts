import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {

  toggleShow:boolean=true;
  messageCount:number=10;
  
  productList:Product[]=[];
  constructor(){
    this.productList.push(new Product(1,'kalem',100));
    this.productList.push(new Product(2,'kalem',100))
    this.productList.push(new Product(3,'kalem',100))
  }

  toggle(){
    this.toggleShow=!this.toggleShow;
  }

  addProduct(){
    this.productList.push(new Product(4,'kalem',100));
  }
  removeProduct(id:number){
    this.productList=this.productList.filter(x=>x.id!=id) //olan id çıkar diğerleri dön
  }
 
}
