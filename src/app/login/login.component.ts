import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // adding login dependencies - TN

import { LoginService } from '../login.service'; // adding login dependencies - TN

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
