import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; // TN
import { BehaviorSubject } from 'rxjs'; // TN
import { tap, map, catchError, first } from 'rxjs/operators';// TN

import { environment as env } from '../environments/environment';// TN
import { Credentials } from './models/credentials';// TN


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly _isAuthenticated = new BehaviorSubject(this.hasToken());
  readonly isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(private http: HttpClient) {
    console.log('LoginService constructed!');
  }
  get isAuthenticated(){
    return this._isAuthenticated.getValue();
  }
  set isAuthenticated(value: boolean){
    this._isAuthenticated.next(value);
  }
  authenticate(credentials: Credentials){
    this.logout(); // if user isn't logged in or doesn't have a valid jwt, log them out

    console.log(`Attempting to login user: ${credentials.username}`);
    let credentialsJson = JSON.stringify(credentials);
    console.log('--> credentialsJson: ',credentialsJson);

    // env -> look in environments directory for API_URL
    // this.http.post(env.API_URL, credentialsJson, {observe: 'response'})
    this.http.post(env.API_URL, credentialsJson, {responseType: 'json', observe: 'response'})
      .pipe(map(resp =>{
        // 'Content-Type': 'application/json'
        console.log('resp:', resp);
        localStorage.setItem('mb-jwt', resp.headers.get('Authorization'));
        console.log('--> response: ', resp);
        // localStorage.setItem('mb-user', JSON.stringify(resp.body)); // debugging
        localStorage.setItem('userId', resp.headers.get('Info'));
        localStorage.setItem('firstName', resp.headers.get('UserFirstName'));
        localStorage.setItem('lastName', resp.headers.get('UserLastName'));
        localStorage.setItem('username', resp.headers.get('UserName'));

      })).subscribe();
  }

  logout(){
    if(localStorage.getItem('mb-user') || localStorage.getItem('mb-jwt')){
      console.log('Logging out current user');
      localStorage.removeItem('mb-jwt');
      localStorage.removeItem('mb-user');
    }
    this.isAuthenticated = false;
  }

  private hasToken(): boolean{
    return !!localStorage.getItem('mb-jwt');
  }
}
