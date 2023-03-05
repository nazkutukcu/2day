import { Visitor } from 'src/app/models/visitor';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VisitorStateService {

  public visitors : Visitor[] = [];
  public confirmedVisitors : Visitor[] = [];
  constructor() { }

  deleteVisitor(email:string){
    const index = this.visitors.findIndex(x=> x.email == email);
    this.visitors.splice(index, 1);
   }
   addVisitor(newVisitor : Visitor){
    
     this.visitors.push(newVisitor);
   }
   resetForm(form: FormGroup){
     form.reset();
     form.controls['publishdateExpire'].setValue('3 ay');
   }

   filterConfirm(): Visitor[] {
    return this.confirmedVisitors = this.visitors.filter(x=>x.isConfirmed == true);
  }



}
