import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePageComponent } from './admin/admin-home-page/admin-home-page.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { PostDetailComponent } from './admin/post-detail/post-detail.component';
import { PostsPageComponent } from './admin/posts-page/posts-page.component';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { UsersPageComponent } from './admin/users-page/users-page.component';
import { VisitorPageComponent } from './admin/visitor-page/visitor-page.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { VisitorsBookComponent } from './pages/visitors-book/visitors-book.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [

      { path: '', component: HomeComponent },
      { path: 'anasayfa', component: HomeComponent },
      { path: 'hakkimizda', component: AboutComponent },
      { path: 'galeri', component: GalleryComponent },
      { path: 'ziyaretçi defteri', component: VisitorsBookComponent },
    

    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [

      { path: '', component: AdminHomePageComponent },
      { path: 'admin-home-page', component: AdminHomePageComponent },
      { path: 'posts-page', component: PostsPageComponent },
      { path: 'user-page', component: UsersPageComponent },
      { path: 'visitor-page', component: VisitorPageComponent },
      { path: 'post-detail/:id', component: PostDetailComponent },
      { path: 'user-detail/:id', component: UserDetailComponent },
    

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
