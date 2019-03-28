import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  // responseUrl:string = 'http://mediabingeeb-env-1.2dmqmp7wnb.us-east-1.elasticbeanstalk.com/response/';
  responseUrl:string = 'http://localhost:8080/MediaBinge/response/';
  headers: Headers;


    constructor(private httpClient: HttpClient) {
      this.headers = new Headers({ 'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('mb-jwt') });
    }

      getResponse(postId:number): Observable<any> {
        return this.httpClient.get(this.responseUrl+`postId=${postId}`);
      }

      postResponse(postId:number, myResp:Response): Observable<any>{
        let text = JSON.stringify(myResp);
        console.log(text);
        return this.httpClient.post(this.responseUrl+postId, text);
      }



      //userid

}
