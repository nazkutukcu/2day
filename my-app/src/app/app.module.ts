import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineComponentComponent } from './components/inline-component/inline-component.component';
import { NormalComponent } from './components/normal/normal.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { ExampleComponent } from './components/example/example.component';
import { ChildStockComponent } from './input-output/component/child-stock/child-stock.component';
import { ParentStockComponent } from './input-output/component/parent-stock/parent-stock.component';
import { ChildStockDetailComponent } from './input-output/component/child-stock-detail/child-stock-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineComponentComponent,
    NormalComponent,
    StructuralDirectiveComponent,
    ExampleComponent,
    ChildStockComponent,
    ParentStockComponent,
    ChildStockDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
