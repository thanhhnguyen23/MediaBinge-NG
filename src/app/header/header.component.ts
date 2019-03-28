import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  username:string = localStorage.getItem('username');

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  logout(){
    console.log('logging out');
    window.localStorage.clear();
    this.router.navigate(['/']);
    this.username = null;
  }

}
