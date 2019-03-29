import { Component, Input, OnInit } from '@angular/core';
import { ResponseService } from '../services/response.service';
import { Response } from '../models/response';

@Component({
  selector: 'mb-collapse-basic',
  templateUrl: './collapse-basic.component.html',
  styleUrls: ['./collapse-basic.component.css']
})
export class CollapseBasicComponent implements OnInit {

  @Input() postId;
  public isCollapsed = true;
  isBlocked: boolean = (!localStorage.getItem('userRole') || localStorage.getItem('userRole') === '3');
  isValid: boolean = true;
  responses: Array<Object> = [];
  constructor(private service: ResponseService) { }
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.responses = [];
    this.service.getResponse(this.postId).subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        let temp = data[i];
        // console.log(temp);
        // let time: Date = data[i].datePosted.toLocaleTimeString();
        // //  console.log(time);
        this.responses.push(temp);
      }
    });
  }
  /**Adding text box for comments */
  addReply(event) {
    //add role id constraint
    event.target.hidden = true;
    console.log('in add response');

    let textbox = document.createElement('textarea');
    textbox.setAttribute('id', this.postId + '-text');
    textbox.maxLength = 250; //set max number of character to be 250
    textbox.setAttribute("style", "width: 40em");
    event.target.insertAdjacentElement('afterEnd', document.createElement('div').appendChild(textbox));
    textbox.addEventListener('keyup', (event) => {
      //pressing enter turns the text area input into actual text
      if (event.keyCode === 13) {
        this.submitPost();
      }
    });
    // 
  }
  /**Submit reply */
  submitPost() {
    (<HTMLInputElement>event.target).disabled = true;
    let reply = ((<HTMLInputElement>document.getElementById(this.postId + '-text')).value);
    if (reply){
      this.isValid = false;
    }
    let myResp = new Response(reply);
    console.log(myResp);
    //Create a response object
    // let text = JSON.stringify(textInput);
    this.service.postResponse(this.postId, myResp).subscribe((data) => {
      (<HTMLInputElement>event.target).disabled = false;
      (<HTMLInputElement>event.target).value = "";
      this.isCollapsed = false;
      this.getAll();
      
    });

  }


}
