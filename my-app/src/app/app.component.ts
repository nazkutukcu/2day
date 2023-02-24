import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  //FakeserviceService:any;
  
  
    /*
    this.fakeService.getPostUserId(3).subscribe(x=>{
      console.log(x)
    })
    /*
   this.fakeService.getParallelWithForkJoinOperator().subscribe(x=>console.log(x.posts))

    /*
    this.fakeService.deletePost(1).subscribe(x=>{
      console.log(x)
    })


    /*
    //put
    this.fakeService.UpdatePut({ id: 1, title: 'title 1', body: 'body 1', userId: 2 }).subscribe( {
      next: (data)=> console.log(data),
      error: (err)=>{ console.log(err.message); },
      complete: ()=>console.log('tamamlandı')

    })

    /*
    this.fakeService.SavePostWithError({ id: 1, title: 'title 1', body: 'body 1', userId: 2 }).subscribe( {
      next: (data)=> console.log(data),
      error: (err)=>{
        //log
        console.log(err.message);
      
      },
      complete: ()=>console.log('tamamlandı')

    })
       
    /*
    this.fakeService.GetPostWithHeader().subscribe(x=>{
      console.log(x)
    })
    */
  
}
