import { Component, EventEmitter, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  
  @Input() postList: ReadonlyArray<Post>=[];   //postList değişkenini input decarator'u ile işaretledik, 
                                               //çünkü dışarıdan değer almasını istiyoruz
  
  

}
