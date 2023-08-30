import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PostsResponse } from '../Interfaces/posts.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _http = inject(HttpClient);

  constructor() { }


  public getPosts():Observable<PostsResponse[]>{
    return this._http.get<PostsResponse[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
