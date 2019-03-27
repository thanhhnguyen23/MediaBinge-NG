import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';
import { Post } from 'src/models/Post';
import { toDate, isoStringToDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'mb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})


export class MoviesComponent implements OnInit {
  constructor(private posts: PostService) { }

  ngOnInit() {
    this.getPosts();
  }
  //get post from post service
  allPost: Array<Post> = [];

  getPosts() {
    this.posts.getMoviePosts().subscribe( (data) => {
      //converting data to Post model and adding to all post array
      for(let i = 0; i < data.length; i++){
        console.log(data);
        let temp: Post;
        temp = data[i];
        // let time: Date = data[i].datePosted.toLocaleTimeString();
      //  console.log(time);
        console.log('temp!: ' + temp);
        this.allPost.push(temp);
        
      }
      
      console.log("allPost" + this.allPost)
      
    });
  }
}
  
