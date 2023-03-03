import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor/visitor.component';
import { AppRoutingModule } from '../app-routing.module';
import { Visitor2Component } from './visitor2/visitor2.component';
import { Visitor3Component } from './visitor3/visitor3.component';



@NgModule({
  declarations: [
    VisitorComponent,
    Visitor2Component,
    Visitor3Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AdminModule { }
