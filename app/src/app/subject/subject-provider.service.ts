import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectProviderService {

  public mySelectMenuObservable= new Subject();
  public myNameObservable = new Subject();
  public subject;
  public observableSubject =new Observable<any>();
  constructor() {
    this.subject=new AsyncSubject<any>();
    this.observableSubject=this.subject.asObservable();
  
   }
   publish(data:any){
    this.subject.next(data);
   }
   complete(){
    this.subject.complete();
   }

}
