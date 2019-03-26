import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; // TN

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // adding login service
  // private url: string = "[beanstalk-end-point-goes-here]";
  private url: string = "www.google.com";

  constructor(private _httpClient: HttpClient) { }

  validate(username: string, password: string){
    console.log('inside validate');
    return this._httpClient.post(this.url, {username, password}, {responseType:'text', observe: 'response'});
  }
}