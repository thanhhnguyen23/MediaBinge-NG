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
    
  }
}
