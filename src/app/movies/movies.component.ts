import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/PostService';
import { Post } from 'src/models/Post';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'mb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
  // providers: [PostService]
})


export class MoviesComponent implements OnInit {
  text: string;
 
  current: Post;
  datePost: string;

  constructor(private posts: PostService) { }

  ngOnInit() {
    this.getPosts();
  }
  //get post from post service
  allPost: Array<Post> = [];

  getPosts() {
    this.posts.getPosts().subscribe( (data) => {
      //converting data to Post model and adding to all post array
      for(let i = 0; i < data.length; i++){
        let temp: Post;
        temp = data[i];
        console.log('temp!: ' + temp);
        this.allPost.push(temp);
        
      }

      // console.log('posts', data);
      // for(let i = 0; i < data.length; i++){
      //   this.allPost[i].postId = data[i].postId;
      //   this.allPost[i].datePosted = data[i].datePosted;
      //   this.allPost[i].text = data[i].text;
      //   this.allPost[i].topic = data[i].topic.id;
      //   this.allPost[i].userId = data[i].user.id;
        
      // }
      
      console.log("allPost" + this.allPost)
      
    });
  }
}
  
