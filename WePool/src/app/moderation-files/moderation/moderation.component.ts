import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.css']
})
export class ModerationComponent implements OnInit {

  userType : any;

  constructor() { }

  ngOnInit(): void {
    //Initialize user type on initialization of page. Load in potential groups on user, "Please sign in!" on not signed in, 
    //and "Group Selected!" on group already selected.
    this.userType = "signedIn";
  }

}
