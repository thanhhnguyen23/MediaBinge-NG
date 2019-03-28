import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/PostService';
import { Router } from '@angular/router';

@Component({
  selector: 'mb-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postBody:string;
  topic:number;
  newPost:Post = new Post();
  isBlocked:boolean = localStorage.getItem('userRole') === '3';

  constructor(private service:PostService, private router:Router) { }

  ngOnInit() {
  }

  addPost(){
    console.log('in post');
    console.log(this.postBody);
    console.log(this.topic);
    this.newPost.text = this.postBody;
    let topicObj = {
      id: this.topic
    };
    this.newPost.topic = topicObj;
    console.log(this.newPost);
    this.service.addPosts(this.newPost).subscribe((data)=>{
      console.log(data);
      if(this.topic === 1){
        this.router.navigate(['/forums/movies']);
      } else{
        this.router.navigate(['/forums/books']);
      }
      
      
    }, (error) => {
      console.log(error);
    }    );
    
  }

}
