import { Component } from '@angular/core';
import { Stock } from './input-output/models/stock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  //one-way binding
  name:string='angular';

}
