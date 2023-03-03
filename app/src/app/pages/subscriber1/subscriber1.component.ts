import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/subject.service';

@Component({
  selector: 'app-subscriber1',
  templateUrl: './subscriber1.component.html',
  styleUrls: ['./subscriber1.component.css']
})
export class Subscriber1Component implements OnInit {

  name: string | undefined;

  constructor(private subjectProviderService: SubjectService) { }

  ngOnInit(): void {
   
    this.subjectProviderService.myNameObservable.subscribe(x => {
      this.name = x as string;
    })
  }

}
