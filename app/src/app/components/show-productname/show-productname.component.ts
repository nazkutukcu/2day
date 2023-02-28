import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-productname',
  templateUrl: './show-productname.component.html',
  styleUrls: ['./show-productname.component.css']
})
export class ShowProductnameComponent implements OnInit,OnChanges,DoCheck,OnDestroy{

  @Input() productName : string='';

  constructor(){
    console.log("constructor method");
    this.productName='';
  }
  ngOnDestroy(): void {
    console.log("ngDestroy method");
    
  }
  ngDoCheck(): void {
    console.log("ngDoCheck method")  //componentteki her değişiklikte çalışır ,parametre olarak bir şey dönmüyor
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges ", changes['productName']);
  }


  ngOnInit(): void {
    console.log("ngOnInit method");
  }

}
