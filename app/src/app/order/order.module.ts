import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';


const router:Routes=[
  {path:'component1',component:Component1Component},
  {path:'component2',component:Component2Component},

]

@NgModule({
  declarations: [
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class OrderModule { }
