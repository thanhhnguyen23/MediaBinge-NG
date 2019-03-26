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
    this.logout();

    console.log(`Attempting to login user: ${credentials.username}`);
    let credentialsJson = JSON.stringify(credentials);

    // env -> look in environments directory for API_URL
    this.http.post(env.API_URL, credentialsJson, {observe: 'response'})
      .pipe(map(resp =>{
        localStorage.setItem('mb-jwt', resp.headers.get('Authorization'));
        localStorage.setItem('mb-user', JSON.stringify(resp.body));
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
