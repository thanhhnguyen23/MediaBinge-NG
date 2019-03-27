import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';

@Component({
  selector: 'mb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
  // providers: [PostService]
})
export class MoviesComponent implements OnInit {

  constructor(private posts: PostService) { }

  ngOnInit() {
    this.getPosts();
  }
  //get post from post service
  text = "I have very strong opinions about movies";
  getPosts() {
    this.posts.getPosts().subscribe(function(data) {
      console.log('posts', data);
    });

    
  }
}
