import { Injectable } from '@angular/core';
import { GroupServiceService } from 'src/app/carpool-files/group-service/group-service.service';

@Injectable({
  providedIn: 'root'
})
export class GroupJoinService {

  constructor(private _groupInfoService : GroupServiceService, ) { }

  comparePrefs(groupID : any) {
    let userData = this._groupInfoService.getUser("renzo");
    let groupData = this._groupInfoService.getGroupPreferences(groupID);
    let count = 3;
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
    return count;
  }

  joinGroup(buttonID : number, groups : any) {
    //Load user data using state
    let user = "renzo"
    //Group ID
    let group = groups[buttonID].id;
    //Add user to group
    console.log("Adding " + user + " to group " + group);
  }
}
