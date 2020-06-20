import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

userid: string;
password: string;
error: string;
  constructor(public router: Router) { }

  ngOnInit() {
    
  }
  login(){
    console.log('userid', this.userid)  ;
    console.log('password', this.password);
    if( this.password !== 'jey'){
      console.log('userid', this.password);
      this.error = 'invlaid password';
    }else {
    //this.router.navigate(['home', '']);
    this.router.navigate(['home']);

  }
  }
}
