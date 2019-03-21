import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  useremail:string;
  userpassword:string;

  loginUser(){
      this.router.navigate(['profile']);
  }

  ngOnInit() {
  }

}
