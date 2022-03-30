import { Injectable } from '@angular/core';
import { GroupServiceService } from 'src/app/carpool-files/group-service/group-service.service';

@Injectable({
  providedIn: 'root'
})
export class GroupJoinService {

  userData :  any;

  constructor(private _groupInfoService : GroupServiceService, ) { 
    //Load in user from state
    this.userData = "Renzo";
  }

  //Returns groups in order of compatibility with user
  orderGroupsByPreferences(groups : any) {
    
  }

  //Compares preferences between user and group and returns the amount of matches
  async comparePrefs(groupID: any) {
    let groupData = await this._groupInfoService.getGroupPreferences(groupID);
    groupData = groupData.groupData.preferences;
    console.log(groupData);
    let count : number = 3;
    if (Math.abs(parseInt(this.userData[6])-parseInt(groupData[6])) <= 1) {
      count++;
    }
    if (Math.abs(parseInt(this.userData[7])-parseInt(groupData[7])) <= 1) {
      count++;
    }
    if (Math.abs(parseInt(this.userData[8])-parseInt(groupData[8])) <= 1) {
      count++;
    }
    if (this.userData[10] != groupData[10]) {
      return 0;
    }
    if (this.userData[11] != groupData[11]) {
      return 0;
    }
    if (this.userData[12] != groupData[12]) {
      return 0;
    }
    return count;
  }

  //User joins group using their id and groups id
  joinGroup(buttonID : number, groups : any) {
    //Load user data using state
    let user = "renzo"
    //Group ID
    let group = groups[buttonID].groupData.id;
    //Add user to group
    console.log("Adding " + user + " to group " + group);
  }
}
