import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/models/Post';
import { Response } from 'selenium-webdriver/http';

@Injectable()
export class PostService {

    postsUrl:string = 'http://localhost:8080/MediaBinge/post';

    constructor(private httpClient: HttpClient) {
        console.log('PostService constructed!');
    }

      getPosts(): Observable<Post> {
        return this.httpClient.get<Post>(this.postsUrl);
      }
    

}