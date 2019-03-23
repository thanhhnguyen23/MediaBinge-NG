import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'mb-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private router: Router) { }
  firstname:string = "Abe";
    movies = ["Empire Strikes Back","Inception","Lord of the Rings","The Godfather", "Airplane!"];
    shows = ["The Wire", "Seinfeild", "Parks and Recreation", "Breaking Bad", "Avatar the Last Airbender"];
    books = ["Harry Potter", "One Flew Over the Cuckoo's Nest", "The Things they Carried", "Catch 22", "1984"];
    submitProf(){
      this.router.navigate(['profile']);
    }
    ngOnInit() {
  }

}
