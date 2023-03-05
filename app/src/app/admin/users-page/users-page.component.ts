import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  userList:User[];

  constructor(private router:Router,private userService:UserService){
    this.userList=[];
  }
  
  ngOnInit(): void {
     this.userService.getAll().subscribe((x) => {
      this.userList = x;
    });
  }

   goToUserDetail(id: number) {
    // this.router.navigateByUrl(`/post-detail/${id}`);
    this.router.navigate(['/admin/user-detail',id]);
  }

}
