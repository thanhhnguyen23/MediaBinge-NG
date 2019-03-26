import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //get post from post service
  text = "I have very strong opinions about movies";
}
