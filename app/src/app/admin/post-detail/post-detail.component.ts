import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent  implements OnInit {

comment?: Comment;
post?:Post;
constructor( private activatedRoute: ActivatedRoute,
  private router: Router,
  private postService: PostService){}


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.postService.getByCommentId(id).subscribe((x) => {
      this.comment = x;
    });

    this.activatedRoute.params.subscribe((param: any) => {
      console.log(param);
      this.postService.getByCommentId(param.id).subscribe((x) => {
        this.comment = x;
      });
    });
  }
  }

