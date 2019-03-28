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
}

