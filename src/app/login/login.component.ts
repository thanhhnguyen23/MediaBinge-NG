import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Credentials } from '../models/credentials';

@Component({
  selector: 'mb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  isValid:boolean = true;

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

    if(username && password){
    (<HTMLButtonElement>event.target).disabled = true;
    this.credentials = new Credentials(username, password);
    this.loginService.authenticate(this.credentials);
<<<<<<< HEAD

=======
    }
    else{
        this.isValid = false;

    }

>>>>>>> 24acaf79a00df7ad6a64c7c20356b988fca16dae
  }
}
