import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VisitorsBookComponent } from './visitors-book/visitors-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    VisitorsBookComponent,
  
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
