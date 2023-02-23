import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildStockDetailComponent } from './input-output/component/child-stock-detail/child-stock-detail.component';
import { ChildStockComponent } from './input-output/component/child-stock/child-stock.component';
import { ParentStockComponent } from './input-output/component/parent-stock/parent-stock.component';


const IS_PROD = true;
@NgModule({
  declarations: [
    AppComponent,
    ParentStockComponent,
    ChildStockComponent,
    ChildStockDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],

  bootstrap: [AppComponent],
})
export class AppModule {}