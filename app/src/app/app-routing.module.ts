import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorComponent } from './admin/visitor/visitor.component';
import { Visitor2Component } from './admin/visitor2/visitor2.component';
import { Visitor3Component } from './admin/visitor3/visitor3.component';
import { CanOrderLoad } from './canload';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';




const routes: Routes = [

  {
    path: '', component: MainLayoutComponent, children: [

      { path: '', component: HomeComponent },
      { path: 'anasayfa', component: HomeComponent },
      { path: 'hakkimizda', component: AboutComponent },
      { path: 'iletisim', component: ContactComponent }

    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [

      { path: 'ziyaretci', component: VisitorComponent },
      { path: 'ziyaretci2', component: Visitor2Component },
      { path: 'ziyaretci3', component: Visitor3Component }


    ]
  },
  {path:"order",loadChildren:()=>import('./order/order.module').then(m=>m.OrderModule)},
  //{path:"component2",loadChildren:()=>import('./order/order.module').then(m=>m.OrderModule)}



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
