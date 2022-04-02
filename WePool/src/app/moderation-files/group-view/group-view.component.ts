import { Component, OnInit } from '@angular/core';
import { GroupServiceService } from '../../carpool-files/group-service/group-service.service';
import { GroupJoinService } from '../group-join-service/group-join.service';

@Component({
  selector: 'group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent implements OnInit {

  groups = [{
    "groupData" : {
        "destination" : "Reitz Student Union, Gainesville, FL, USA",
        "schedule": 1529644667834,
        "users" : [
            {   "name": "Renzo",
                "address": "311 Southwest 13th Street, Gainesville, FL, USA" },
            {   "name": "Ganesh",
                "address": "2800 Southwest 35th Place, Gainesville, FL, USA" },
            {   "name": "Daniel",
                "address": "112 Center Drive, Gainesville, FL, USA" }, 
            {   "name": "Chris",
                "address": "320 Southeast 3rd Street, Gainesville, FL, USA" }
        ],
        "id" : 123
    }
  },
  {
    "groupData" : {
        "destination" : "Reitz Student Union, Gainesville, FL, USA",
        "schedule": 1529644667834,
        "users" : [
            {   "name": "Renzo",
                "address": "311 Southwest 13th Street, Gainesville, FL, USA" },
            {   "name": "Ganesh",
                "address": "2800 Southwest 35th Place, Gainesville, FL, USA" },
            {   "name": "Daniel",
                "address": "112 Center Drive, Gainesville, FL, USA" }, 
            {   "name": "Chris",
                "address": "320 Southeast 3rd Street, Gainesville, FL, USA" }
        ],
        "id" : 1234
    }
  },
  {
    "groupData" : {
        "destination" : "Reitz Student Union, Gainesville, FL, USA",
        "schedule": 1529644667834,
        "users" : [
            {   "name": "Renzo",
                "address": "311 Southwest 13th Street, Gainesville, FL, USA" },
            {   "name": "Ganesh",
                "address": "2800 Southwest 35th Place, Gainesville, FL, USA" },
            {   "name": "Daniel",
                "address": "112 Center Drive, Gainesville, FL, USA" }, 
            {   "name": "Chris",
                "address": "320 Southeast 3rd Street, Gainesville, FL, USA" }
        ],
        "id" : 12345
    }
  }];

  constructor(public groupJoinService : GroupJoinService) { }

  matches: number[] = [];

  async ngOnInit(): Promise<void> {
    for(const group of this.groups) {
        this.matches.push(await this.groupJoinService.comparePrefs(group));
    }
  }

  //Add user to group
  joinGroup(id : any) {
    console.log(id);
    this.groupJoinService.joinGroup(id, this.groups);
  }

}
