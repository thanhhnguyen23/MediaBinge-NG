import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // adding login dependencies - TN
import { LoginService } from '../login.service'; // adding login dependencies - TN
import { Credentials } from '../models/credentials';// adding login dependencies - TN

@Component({
  selector: 'mb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  useremail:string;
  userpassword:string;

  loginUser(){
      this.router.navigate(['profile']);
  }


  isAuthenticated$ = this.loginService.isAuthenticated;
  credentialsInvalid: boolean = false;
  credentials: Credentials;

  constructor(private loginService: LoginService, private router: Router) {
    console.log('LoginComponent constructed');
  }

  login(username: string, password: string): void{
    this.credentials = new Credentials(username, password);
    this.loginService.authenticate(this.credentials);
    this.router.navigate(['profile']);
    // this block of code seems to prevent the login from loading entirely
    // this.isAuthenticated$.subscribe(isAuth => {
    //   if(isAuth){
    //     this.credentialsInvalid = false;
    //     // this.router.navigate(['services']); //testig to see if this throw errors
    //     this.router.navigate(['']); // using to debug
    //   }
    // }, err => {
    //   this.credentialsInvalid = true;
    // });
  }
}
