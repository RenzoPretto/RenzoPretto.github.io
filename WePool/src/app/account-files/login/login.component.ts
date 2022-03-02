import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username:string;
  password:string;
  rusername:string;
  rpassword:string;
  rcpassword:string;
  
  constructor() { }

  ngOnInit(): void {
  }

  register() {
    this.rusername == this.username;
    this.rpassword == this.password;
    console.log("User " + this.rusername + " has registered with password " + this.rpassword)
  }
  login() {
    if(this.rusername==this.username && this.password==this.rpassword){
      console.log("User " + this.username + " has logged in with password " + this.password)
    }
    else{
      console.log("Incorrect username or password")
    }
  }

}




