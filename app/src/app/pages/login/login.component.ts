import { Component } from '@angular/core';
import { ProductStateService } from 'src/app/services/product-state.service';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userStateService:UserStateService){}

  login(){
    this.userStateService.currentUser={id:1,name:"ahmet",email:"ahmet@outlook.com"};
  }
  change(){
    this.userStateService.currentUser!.email="mehmet@outlook.com"; 
  }
 

}
