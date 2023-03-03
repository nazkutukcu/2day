import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/subject.service';

@Component({
  selector: 'app-subscriber2',
  templateUrl: './subscriber2.component.html',
  styleUrls: ['./subscriber2.component.css']
})
export class Subscriber2Component implements OnInit{

  name: string | undefined;

  constructor(private subjectProviderService: SubjectService) { }

  ngOnInit(): void {
    this.subjectProviderService.myNameObservable.subscribe(x => {
      this.name = x as string;
    })
  }



}
