import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; // TN
import { BehaviorSubject } from 'rxjs'; // TN
import { tap, map, catchError, first } from 'rxjs/operators';// TN
import { HttpHeaders } from '@angular/common/http';
import { environment as env } from '../environments/environment';// TN
import { Credentials } from './models/credentials';// TN
import{ Router } from '@angular/router';


@Injectable()
export class LoginService {

  private readonly _isAuthenticated = new BehaviorSubject(this.hasToken());
  readonly isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor(private http: HttpClient, private router: Router) {
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
    

    this.http.post('http://localhost:8080/MediaBinge/login' , credentialsJson,  {responseType: 'json', observe: 'response'})
      .pipe(map(resp =>{
        // 'Content-Type': 'application/json';
        console.log('resp:', resp);
    
        localStorage.setItem('mb-jwt', resp.headers.get('Authorization'));
        console.log(resp.headers.get('Authorization'));
        
        localStorage.setItem('userId', resp.headers.get('Info'));
        localStorage.setItem('firstName', resp.headers.get('UserFirstName'));
        localStorage.setItem('lastName', resp.headers.get('UserLastName'));
        localStorage.setItem('username', resp.headers.get('UserName'));
        if(resp.status == 200)
        {
          this.router.navigate(['/profile']);
        }
      })).subscribe();
  }

  logout(){
    if(localStorage.getItem('mb-user') || localStorage.getItem('mb-jwt')){
      console.log('Logging out current user');
      localStorage.clear();

    }
    this.isAuthenticated = false;
  }

  private hasToken(): boolean{
    return !!localStorage.getItem('mb-jwt');
  }
}
