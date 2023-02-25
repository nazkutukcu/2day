import { Component } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  postList:ReadonlyArray<Post>=[];
  loading:boolean=false;
  constructor(private postService:PostService)
  {

    this.postService.getAll().subscribe(x=> this.postList=x);
  }

  search(search:string)
  {
    this.loading=true;
    this.postService.GetSearchByTitle(search).subscribe(x=>{
      this.postList=x; this.loading=false;})
  }

}
