import { Component, OnInit } from '@angular/core';
import{ RegisterService } from '../register.service';
import{ Router } from '@angular/router';
import{ userInfo } from '../models/userInfo'
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'mb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userInfo: userInfo;
  status:Number;
  isValid:boolean = true;
  constructor(private registerService: RegisterService, private router: Router) { 
    console.log('Reg component made');
  }

  ngOnInit() {
  }

  register(username:string,firstname:string,lastname:string,password:string)
  {
    this.userInfo = new userInfo(username,firstname,lastname,password);
    this.registerService.addUser(this.userInfo);
    
   

  }
}
