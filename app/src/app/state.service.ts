import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public productList:Product[]=[];
  constructor() { }

}
