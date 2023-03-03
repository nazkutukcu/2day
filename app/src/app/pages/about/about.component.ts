import { Component, OnDestroy } from '@angular/core';
import { ProductStateService } from 'src/app/services/product-state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnDestroy {

  constructor(public productStateService:ProductStateService){}
  ngOnDestroy(): void {
    console.log("about destroy")
  }

}
