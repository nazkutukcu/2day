import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { VisitorPageComponent } from './visitor-page/visitor-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    //AdminLayoutComponent,
    AdminHomePageComponent,
    PostsPageComponent,
    UsersPageComponent,
    VisitorPageComponent,
    PostDetailComponent,
    UserDetailComponent
  ],
  imports: [
  CommonModule,
  AppRoutingModule
  ]
})
export class AdminModule { }
