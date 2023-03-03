import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryMenu } from '../models/category-menu';
import { Product } from '../models/product';
import { PublishMenu } from '../models/publish-menu';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  newProduct: Product | undefined = undefined;
  public productForm = this.formBuilder.group({

    name:[''],
    price:[''],
    category:[''],
    publish: ['2'],
    isPublish: [false],


  })

  categoryMenuList: CategoryMenu[] = [
    { id: 1, text: 'kalemler' },
    { id: 2, text: 'Defterler' },
    { id: 3, text: 'Silgiler' },
  ];

  publishMenulist: PublishMenu[] = [
    { id: 1, text: '3 ay' },
    { id: 2, text: '6 ay' },
    { id: 3, text: '9 ay' },
  ];


  constructor(private formBuilder:FormBuilder){}

  save() {
   

    this.newProduct = this.productForm.value as Product;
    console.log(this.newProduct);
  }



}
