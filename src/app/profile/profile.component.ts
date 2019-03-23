import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mb-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
    firstname:string = "Abe";
    movies = ["Empire Strikes Back","Inception","Lord of the Rings","The Godfather", "Airplane!"];
    shows = ["The Wire", "Seinfeild", "Parks and Recreation", "Breaking Bad", "Avatar the Last Airbender"];
    books = [ "One Flew Over the Cuckoo's Nest", "The Things they Carried", "Catch 22", "1984"];
  ngOnInit() {
  }

}
