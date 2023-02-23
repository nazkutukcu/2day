import { Component } from '@angular/core';
import { FakeserviceService } from './fakeservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

 //FakeserviceService:any;
  constructor(private fakeService:FakeserviceService){

    this.fakeService.getPosts().subscribe(x=>{
      console.log(x)
    })
  }
}
