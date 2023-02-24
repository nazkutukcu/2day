import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { find, first, from, interval, map, observable, Observable, of, range, take, takeLast, timer } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ajax } from 'rxjs/ajax';
import{HttpClientModule} from '@angular/common/http';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostSearchComponent } from './components/post-search/post-search.component';
import { PostComponent } from './post/post.component';

interface product{
  id:number;
  name:string;
  price:number;
}

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSearchComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {


    /*
    //Filter operator
    //First Operator

    var fromOperator=from([10,20,30,40,50,60,70]);
    var fromOperatorByProduct=from([
      {id:1,name:"kalem 1",price:100},
      {id:2,name:"kalem 2",price:100},
      {id:3,name:"kalem 3",price:100}
    ])
    //map
    fromOperator.pipe(map(x=>x*2)).subscribe(x=>{
      console.log(x)
    })
    /*
    //take last:sondaki iki elemanı gösterir
    fromOperatorByProduct.pipe(takeLast(2)).subscribe(x=>{
      console.log(x)
    })

    /*
    //take :dizinin ilk 2 elemanı gösterir
    fromOperatorByProduct.pipe(take(2)).subscribe(x=>{
      console.log(x)
    })

    /*
  //first
    fromOperator.pipe(first()).subscribe(x=>{
      console.log(x);
    })
    */
    /*
    //find
    fromOperatorByProduct.pipe(find(x=>x.id==2)).subscribe(x=>{
      console.log(x)
    })


    /*
    //O'dan observable nesnesi oluşturmak
    var myobservable = Observable.create((observer: any) => {
      observer.next("hey guys");
      observer.next("hey guys 2");
      observer.next("hey guys 3");
      observer.complete();

    })

    myobservable.subscribe((x: any) => {
      console.log(x)
    })

    myobservable.subscribe({
      next: (value: any) => console.log(value),
      error: (err: Error) => { console.log(err) },
      complete: () => { console.log("data alma işlemi tamamlandı") }

    })

    /*
    //ajax
   
    //range
        range(1,20).subscribe(x=>{
          console.log(x)
        })
    
        /*
        timer(5000).subscribe(x=>{
          console.log(x);
    
          alert("kampanya var")
        })
    
    
        //of
        /*
        let ofOperator= of(1,2,3,4,5);
        ofOperator.subscribe(x=>{
          console.log(x)
        })
        var subscriber1=ofOperator.subscribe(x=>{
          console.log(x)
        })
        //subscriber1.unsubscribe(); //
        /*
        //interval
        interval(1000).subscribe(x=>{
          console.log(x)
          */

  }

}
