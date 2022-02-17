import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
//The purpose of this component is to display users and their information. Information may be up to change.
export class GroupInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  panelOpenState = false;

  @Input() group: any;

}
