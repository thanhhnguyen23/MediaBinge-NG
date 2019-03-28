import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable()
export class PostService {

    postsUrl:string = 'http://mediabingeeb-env-1.2dmqmp7wnb.us-east-1.elasticbeanstalk.com/post';

    constructor(private httpClient: HttpClient) {
    }

      getPosts(): Observable<any> {
        return this.httpClient.get(this.postsUrl);
      }
      //topic id
      getMoviePosts(): Observable<any> {
        return this.httpClient.get(this.postsUrl+'/topic=1');
      }
      getBooksPosts(): Observable<any> {
        return this.httpClient.get(this.postsUrl+'/topic=2');
      }

      //userid
      addPosts(post:Post): Observable<any> {
        return this.httpClient.post(this.postsUrl,post);
      }


}
