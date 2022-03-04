import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGroup } from './group-interface';

@Injectable({
  providedIn: 'root'
})
export class GroupServiceService {

  constructor(private http : HttpClient) { }

  private _url = "./assets/data/group-data.json";

  async getGroup() {
    return this.http.get(this._url).toPromise()
    .then(
      res => { // Success
        return parseJSON(res).groupData;
      }
    );
  }
}

function parseJSON(data: any) {
  return JSON.parse(JSON.stringify(data));
}
