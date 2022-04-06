import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  userType : any;

  constructor() { }

  ngOnInit(): void {
    //Initialize user type on initialization of page. Load in potential groups on user, "Please sign in!" on not signed in, 
    //and "Group Selected!" on group already selected.
    this.userType = "groupSelected";
  }

}
