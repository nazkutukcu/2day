import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  postList: Post[];

  constructor(private router: Router, private postService: PostService) {
    this.postList = [];
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe((x) => {
      this.postList = x;
    });
  }

  goToPostDetail(id: number) {
    // this.router.navigateByUrl(`/post-detail/${id}`);
    this.router.navigate(['/admin/post-detail',id]);
  }

}
