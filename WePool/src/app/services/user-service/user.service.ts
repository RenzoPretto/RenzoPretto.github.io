import { Injectable } from '@angular/core';
import { GroupService } from '../group-service/group.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userUrl = "./assets/data/user-data.json";

  constructor(private http: HttpClient, public groupService: GroupService) { }

  //Pass in user, build url to get profile info
  async getUser(user : string) {
    let url = user;
    return this.http.get(this._userUrl).toPromise()
    .then(
      res => { // Success
        return parseJSON(res);
      }
    );
  } 

  //Compares preferences between user and group and returns the amount of matches
  async comparePrefs(groupID: any): Promise<number>{
    let userData = await this.getUser("renzo");
    userData = userData.Preferences;
    console.log(userData);
    let groupData = await this.groupService.getGroupPreferences(groupID);
    console.log(groupData);
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
    if (userData[10] != groupData[10] || userData[11] != groupData[11] || userData[12] != groupData[12]) {
      return 0;
    }
    console.log(count);
    return count;
  }

  //Converts phone number to formatted version
  parsePhoneNumber(phoneNum: string): string {
    let formattedNum = "";
    formattedNum += "(" + phoneNum.substring(0,3) + ")" + phoneNum.substring(3,6) + "-" + phoneNum.substring(6,10);
    console.log(formattedNum);
    return formattedNum;
  }
}

function parseJSON(data: any) {
  return JSON.parse(JSON.stringify(data));
}