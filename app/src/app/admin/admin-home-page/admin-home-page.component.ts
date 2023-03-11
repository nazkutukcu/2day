import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/post.service';
import { UserService } from 'src/app/user.service';
import { VisitorStateService } from 'src/app/visitor-state.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent {

  public postList:Post[] = [];
  public userList:User[] = [];

  constructor(private userService: UserService, private postService : PostService, public visitorService: VisitorStateService){
    this.postService.getAll().subscribe((x) => {
      this.postList = x;
    })
    this.userService.getAll().subscribe((x) => {
      this.userList = x;
    })
  }

}
