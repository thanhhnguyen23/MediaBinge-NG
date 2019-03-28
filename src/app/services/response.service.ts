import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  responseUrl:string = 'http://localhost:8080/MediaBinge/response/';
  headers: Headers;
  

    constructor(private httpClient: HttpClient) {
      this.headers = new Headers({ 'Content-Type': 'application/json', 
      'Authorization': localStorage.getItem('mb-jwt') });
    }

      getResponse(postId:number): Observable<any> {
        return this.httpClient.get(this.responseUrl+`postId=${postId}`);
      }

      postResponse(postId:number, text:string): Observable<any>{
        return this.httpClient.post(this.responseUrl+postId, text);
      }
      
      

      //userid

}
