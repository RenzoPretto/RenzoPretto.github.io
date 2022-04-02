import { Component, Input, OnInit } from '@angular/core';
import { GroupServiceService } from 'src/app/services/group-service/group-service.service';

@Component({
  selector: 'group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
//The purpose of this component is to display users and their information. Information may be up to change.
export class GroupInfoComponent implements OnInit {

  group: any;

  constructor(private _groupInfoService : GroupServiceService) {
   }

  ngOnInit(): void {
    this._groupInfoService.getGroup().then(data => {
      this.group = data.users; 
    });
  }
  
  panelOpenState = false;
  @Input() panelState;

}
