import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, from, Observable, switchMap } from 'rxjs';
import { Post } from './models/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getByCommentId(id: number) {
    //return this.http.get<Comment>(
      return this.http.get<any> (`https://jsonplaceholder.typicode.com/comments/${id}`);
    
    
  }

  getById(id: number) {
    //return this.http.get<Comment>(
      return this.http.get<Post> (`https://jsonplaceholder.typicode.com/posts/${id}`);
    
    
  }
}
