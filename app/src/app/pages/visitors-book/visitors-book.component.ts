
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContentType } from 'src/app/models/contentType';
import { PublishMenu } from 'src/app/models/publishMenu';
import { Visitor } from 'src/app/models/visitor';
import { VisitorStateService } from 'src/app/visitor-state.service';
import { BirhdateValidator } from '../../validations/birthDateValidator';
@Component({
  selector: 'app-visitors-book',
  templateUrl: './visitors-book.component.html',
  styleUrls: ['./visitors-book.component.css']
})
export class VisitorsBookComponent {

  newVisitor: Visitor|undefined=undefined;

  newFormArray:Visitor[]=[];
  isButtonVisible = false;
  
  visitorForm=this.formBuilder.group({    //validasyon alanı
  
    name:["",[Validators.required, Validators.minLength(5)]],
    email: ['email@example.com', [Validators.required, Validators.minLength(10),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    content:["",[Validators.required, Validators.minLength(50)]],
    publishdateExpire: ["",Validators.required],  
    contentType:["",Validators.required],
    birthDate: ["", [Validators.required,BirhdateValidator()]],
    isConfirmed:[false]
     

  },
)

//content type
contentTypeList:ContentType[]=[
  {id:1,text:'eleştiri'},
  {id:2,text:'öneri'},

];

//publish date expire
publishMenulist: PublishMenu[] = [
  { id: 1, text: '3 ay' },
  { id: 2, text: '6 ay' },
  { id: 3, text: '9 ay' },
];


constructor(private formBuilder:FormBuilder,public visitorStateService:VisitorStateService){}

save(){

  if (this.visitorForm.invalid) {
    alert('Lütfen tüm alanları doldurunuz');
    return;
  }

 
  this.visitorForm.controls['isConfirmed'].setValue(false);
  this.newVisitor = this.visitorForm.value as unknown as Visitor;
  this.visitorStateService.addVisitor(this.newVisitor);
  console.log(this.visitorStateService.visitors);
  this.visitorStateService.resetForm(this.visitorForm);
 
}

isInvalid(controlName:string) : boolean{

  let control=this.visitorForm.get(controlName)!;

  if(!(control.invalid && (control.dirty|| control.touched))) return false;

  if(control.errors?.['required']) return true;
  if(control.errors?.['minlength']) return true;
  if(control.errors?.['maxlength']) return true;
  if(control.errors?.['max']) return true;
  if(control.errors?.['min']) return true;
  if(control.errors?.['pattern']) return true;
  if (control.errors?.['birthdateFormat']) return true;

  

  return false;

}

isValid(controlName:string){
  let control =this.visitorForm.get(controlName)!;
  return control.valid && (control.dirty || control.touched);
}

getControl(controlName:string){

  return this.visitorForm.get(controlName)!;
}

isInvalidControl(controlName:string,
  validationName:string){

    return this.getControl(controlName).errors?.
    [validationName];

}




}

