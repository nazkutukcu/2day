import { Component, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.css']
})
export class PostSearchComponent {
  @Output() searchEvent = new EventEmitter<string>(); //number
  
  
  search(text: any) {
  
    this.searchEvent.emit(text as string);
   //this.searchEvent.includes(text as string);
  }



}
