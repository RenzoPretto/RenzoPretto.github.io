import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

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
  baseURL: string = "http://localhost:8000";
  
  constructor(private http: HttpClient, private route: ActivatedRoute,
    private router: Router) {
    
  }

  ngOnInit(): void {
  }

  authServiceR(){
    return this.http.post(`${this.baseURL}/signup`, {"workEmail":this.rusername, "password":this.rpassword}, { observe: 'response' });
  }

  authServiceL(){
    return this.http.post(`${this.baseURL}/login`, {"workEmail":this.username, "password":this.password}, { observe: 'response' });
  }

  register() {
    this.authServiceR().subscribe(
      (res) => {
        if (res.status == 201) {
          console.log(res);
          this.router.navigate(['/profile']);
        }
        else if (res.status == 409) {
          console.log(res);
        }
      }, (error)=>{
        if (error.status === 500) {
              console.log(error.status);
              alert('Server down please try after some time');
        }
        else if (error.status === 404) {
             console.log(error.status);
             alert('Server down. Please try after some time');
       }

      });
    }
    

  login() {
    this.authServiceL().subscribe(
      (res) => {
        if (res.status == 200) {
          console.log(res);
          this.router.navigate(['/home']);
        }
        else if (res.status == 401) {
          console.log(res);
        }
      }, (error)=>{
        if (error.status === 500) {
              console.log(error.status);
              alert('Server down please try after some time');
        }
        else if (error.status === 404) {
             console.log(error.status);
             alert('Server down. Please try after some time');
       }

      });
    }
  }






