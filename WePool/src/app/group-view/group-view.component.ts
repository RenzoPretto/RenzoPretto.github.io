import { Component, OnInit } from '@angular/core';
import { GroupServiceService } from '../carpool-files/group-service/group-service.service';

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
        ]
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
        ]
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
        ]
    }
  }];

  constructor(private _groupInfoService : GroupServiceService) { }

  ngOnInit(): void {
    console.log(this.groups[0]);
  }

  comparePrefs() {
    userData = this._groupInfoService.getUser().preferences;
    groupData = this._groupInfoService.getGroupPreferences();
    let count = 0;
    if (Math.abs(parseInt(userData[6])-parseInt(groupData[6])) <= 1) {
      count++;
    }
    if (Math.abs(parseInt(userData[7])-parseInt(groupData[7])) <= 1) {
      count++;
    }
    if (Math.abs(parseInt(userData[8])-parseInt(groupData[8])) <= 1) {
      count++;
    }
    if (userData[10] != groupData[10]) {
      return 0;
    }
    if (userData[11] != groupData[11]) {
      return 0;
    }
    if (userData[12] != groupData[12]) {
      return 0;
    }
    return count + 3;
  }

}
