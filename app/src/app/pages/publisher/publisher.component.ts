import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubjectService } from 'src/app/subject.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit{

  constructor(private subjectServiceProvider: SubjectService, private formBuilder: FormBuilder){}

  public myform=this.formBuilder.group({
    name=[''],
  })

  ngOnInit(): void {

    this.myform.get('name')?.valueChanges.subscribe(val=>{
      this.subjectServiceProvider=val;
    })

    
  }

 


}
