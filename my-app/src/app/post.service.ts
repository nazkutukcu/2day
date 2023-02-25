import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }

  getAll()
 {
  return this._http.get<ReadonlyArray<Post>>('https://jsonplaceholder.typicode.com/posts')
 }
 GetSearchByUserId(id:number)
 {
   let params= new HttpParams().set('userId',id);  //url'e query parametre eklemek için 
   return this._http.get<ReadonlyArray<Post>>('https://jsonplaceholder.typicode.com/posts',{params:params})
 }

 GetSearchByTitle(title:string)
 {
  let params= new HttpParams().set('title',title);
  return this._http.get<ReadonlyArray<Post>>('https://jsonplaceholder.typicode.com/posts',{params:params})

 }

}
