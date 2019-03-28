import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'mb-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private posts: PostService) { }

  ngOnInit() {
    this.getPosts();
  }
  //get post from post service
  allPost: Array<Post> = [];

  getPosts() {
    this.posts.getBooksPosts().subscribe( (data) => {
      
      for(let i = 0; i < data.length; i++){
        console.log(data);
        let temp: Post;
        temp = data[i];
        // let time: Date = data[i].datePosted.toLocaleTimeString();
      //  console.log(time);
        this.allPost.push(temp);
        
      }
      
      console.log("allPost" + this.allPost)
      
    });
  }

}
