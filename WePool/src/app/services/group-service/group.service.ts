import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private _groupUrl = "./assets/data/group-data.json";
  private _groupsUrl = "./assets/data/groups-data.json";

  constructor(private http: HttpClient) { }

  //User joins group using their id and groups id
  joinGroup(buttonID : number, groups : any) {
    //Load user data using state
    let user = "renzo"
    //Group ID
    let group = groups[buttonID].groupData.id;
    //Add user to group
    console.log("Adding " + user + " to group " + group);
  }

  //Gets group based off user
  async getGroup() {
    return this.http.get(this._groupUrl).toPromise()
    .then(
      res => { // Success
        return parseJSON(res);
      }
    );
  }
  
  //Pass in group, build url to get group preferences
  async getGroupPreferences(group : string) {
    let url = group;
    return this.http.get(this._groupUrl).toPromise()
    .then(
      res => { // Success
        return parseJSON(res).Preferences;
      }
    );
  } 
  
  //Get groups from company
  async getGroups(group: string) {
    let url = group;
    return this.http.get(this._groupsUrl).toPromise()
    .then(
      res => { // Success
        return parseJSON(res);
      }
    );
  }

}

function parseJSON(data: any) {
  return JSON.parse(JSON.stringify(data));
}