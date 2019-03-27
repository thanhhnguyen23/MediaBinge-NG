import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/models/Post';

@Injectable()
export class PostService {

    postsUrl:string = 'http://localhost:8080/MediaBinge/post';

    constructor(private httpClient: HttpClient) {
        console.log('PostService constructed!');
    }
    postArray: Post[];

      getPosts(): Observable<Post> {
        return this.httpClient.get<Post>(this.postsUrl);
      }
//topic id
//userid
      observer = {
        next: function(data){
          // console.log('posts', data);
          for(let i = 0; i < data.length; i++){
            this.postArray[i] = data[i];
          }
        }    
      }
      

}