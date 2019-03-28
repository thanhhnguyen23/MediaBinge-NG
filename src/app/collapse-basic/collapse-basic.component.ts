import { Component, Input, OnInit } from '@angular/core';
import { ResponseService } from '../services/response.service';


@Component({
  selector: 'mb-collapse-basic',
  templateUrl: './collapse-basic.component.html',
  styleUrls: ['./collapse-basic.component.css']
})
export class CollapseBasicComponent implements OnInit {

  @Input() postId;
  public isCollapsed = true;
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
        // let time: Date = data[i].datePosted.toLocaleTimeString();
        // //  console.log(time);
          this.responses.push(temp);
      }
    });
    console.log(this.responses);
  }
/**Adding text box for comments */
  addReply(event){    
    event.target.hidden = true;
    console.log('in add response');
    console.log(event.target);
    
    let textbox = document.createElement('textarea');
    textbox.setAttribute('id', this.postId+'-text');
    event.target.insertAdjacentElement('afterEnd',document.createElement('div').appendChild(textbox));
    textbox.addEventListener('keyup', (event) => {
      //pressing enter turns the text area input into actual text
         if (event.keyCode === 13) {
          this.submitPost();
      }
    });
    // 
  }
/**Submit reply */
  submitPost(){
    event.target.hidden = true;
    let textInput = document.getElementById(this.postId+'-text');
    console.log(textInput);
    //Create a response object
    let text = JSON.stringify(textInput.value);
    console.log(text);
    this.service.postResponse(this.postId, text).subscribe((data)=>{
      console.log(data);
      this.isCollapsed = false;
      this.getAll(); 
    });
       
}


}
