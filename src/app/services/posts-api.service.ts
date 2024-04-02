import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../interfaces/post.inteface';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class PostsApiService {

  URL_BASE = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<PostInterface[]>{
    return this.httpClient.get<PostInterface[]>(this.URL_BASE).pipe(res => res);
  }

  getPost(id: number){
    const urlGet = this.URL_BASE.concat("/",String(id));
    console.log("////////", urlGet)
    return this.httpClient.get<PostInterface[]>(urlGet).pipe(res => res);
  }

  updatePost(postData: PostInterface){
    this.httpClient.put(this.URL_BASE, postData).pipe(res => res); 
  }

  deletePost(id: number) {
    const urlGet = this.URL_BASE.concat("/",String(id));
    this.httpClient.delete<PostInterface[]>(urlGet).pipe(res => res);
  }
}
