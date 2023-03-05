import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLayoutComponent } from '../admin/admin-layout/admin-layout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainLayoutComponent,
    AdminLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
