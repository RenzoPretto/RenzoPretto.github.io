import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carpools',
  templateUrl: './carpools.component.html',
  styleUrls: ['./carpools.component.css']
})
export class CarpoolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Group should be loaded by some HTTP request depending on the user that is logged in. This is an example set of data.
  group = [{fName: "Renzo", lName:"Pretto", phoneNum:"(305) 930-3207", gender:"Male"},
          {fName: "Daniel", lName:"Johnson", phoneNum:"(123) 456-7890", gender:"Male"},
          {fName: "Ganesh", lName:"Sundar", phoneNum:"(098) 765-4321", gender:"Male"},
          {fName: "Chris", lName:"Phang", phoneNum:"(121) 212-1212", gender:"Male"}];

}
