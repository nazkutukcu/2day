import { Component } from '@angular/core';

@Component({
  selector: 'app-to-way-binding',
  templateUrl: './to-way-binding.component.html',
  styleUrls: ['./to-way-binding.component.css']
})
export class ToWayBindingComponent {
name:string="ahmet";

change(){
  this.name="mehmet";

}
}
