import { Injectable } from '@angular/core';
import { userInfo } from './models/userInfo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map, catchError, first } from 'rxjs/operators'; // TN
import{ status } from './models/status';
import { BehaviorSubject } from 'rxjs';
import{ Router } from '@angular/router';

@Injectable()
export class RegisterService {
  private readonly _isAuthenticated = new BehaviorSubject(false);
  readonly isAuthenticated$ = this._isAuthenticated.asObservable();



  constructor(private http: HttpClient,private router: Router) {
    console.log('http constructed!');
   }
   get isAuthenticated(){
    return this._isAuthenticated.getValue();
  }
  set isAuthenticated(value: boolean){
    this._isAuthenticated.next(value);
  }
  addUser(userInfo:userInfo)
  {
    console.log(userInfo);
    let userInfoJson = JSON.stringify(userInfo);
    console.log(userInfoJson);
    this.http.post('http://mediabingeeb-env-1.2dmqmp7wnb.us-east-1.elasticbeanstalk.com/users/register', userInfoJson, {responseType: 'json', observe:'response'})
    .pipe(map(resp =>{
              console.log(resp);
              if(resp.status == 201 )
              {
                this.router.navigate(['/login']);
              }
    })).subscribe();

  }
}
