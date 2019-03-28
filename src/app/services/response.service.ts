import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  postsUrl:string = 'http://localhost:8080/MediaBinge/response/';

    constructor(private httpClient: HttpClient) {
    }

      getResponse(postId:number): Observable<any> {
        return this.httpClient.get(this.postsUrl+`postId=${postId}`);
      }
      
      

      //userid

}
