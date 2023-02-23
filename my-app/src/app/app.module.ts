import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    let ofOperator= of(1,2,3,4,5);
    ofOperator.subscribe(x=>{
      console.log(x)
    })
    var subscriber1=ofOperator.subscribe(x=>{
      console.log(x)
    })
    subscriber1.unsubscribe(); //
  }
 
}
