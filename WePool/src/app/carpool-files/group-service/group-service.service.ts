import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IGroup } from './group-interface';

@Injectable({
  providedIn: 'root'
})
export class GroupServiceService {

  constructor(private http : HttpClient) { }

  private _url = "./assets/data/group-data.json";
  private _userUrl = "";

  //Gets group based off user
  async getGroup() {
    return this.http.get(this._url).toPromise()
    .then(
      res => { // Success
        return parseJSON(res).groupData;
      }
    );
  }

  //Pass in user, build url to get profile info
  async getUser(user : string) {
    let url = user;
    return this.http.get(this._url).toPromise()
    .then(
      res => { // Success
        return parseJSON(res);
      }
    );
  } 
  
  //Pass in group, build url to get group preferences
  async getGroupPreferences(group : string) {
    let url = group;
    return this.http.get(this._url).toPromise()
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
