import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
//Component created to handle styling of survey page without touching other areas
export class SurveyComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  //Questions that will be used for now
  questions = [{question: "Personal Info", type: "label"},
               {question: "My full name is...", type: "textbox"},
               {question: "My gender is...", type: "textbox"},
               {question: "My address is...", type: "address"},
               {question: "My work location is...", type: "company"},
               {question: "Preferences", type: "label"},
               {question: "When I ride I am talkative and lovet to catch up with my coworkers about their out of work happenings!", type: "slider"},
               {question: "I like to keep it chilly in the car, the cold helps me wake up!", type: "slider"},
               {question: "Music makes the car ride much more enjoyable and livens up my day!", type: "slider"},
               {question: "Must Haves", type: "label"},
               {question: "Food in the car?", type: "checkbox"},
               {question: "Smoking in the car?", type: "checkbox"},
               {question: "I want to ride with only the same gender.", type: "checkbox"}];
  items = [];
  preferences = {
    "Talkativeness": 0,
    "Music": 0,
    "Temperature": 0,
    "Mask": false,
    "Food": false,
    "Smoking": false,
    "Gender": "male"
  }

  async addItem(newItem: string[]) {
    this.items = newItem;
    this.updatePreferences(newItem);
    await this.userService.updateUserProfile(this.preferences);
    console.log(this.preferences);
  }

  updatePreferences(newPrefs) {
    this.preferences.Talkativeness = parseInt(newPrefs[6]);
    this.preferences.Temperature = parseInt(newPrefs[7]);
    this.preferences.Talkativeness = parseInt(newPrefs[8]);
    this.preferences.Mask = newPrefs[10];
    this.preferences.Food = newPrefs[11];
    this.preferences.Smoking = newPrefs[12];
    this.preferences.Gender = newPrefs[2];
    console.log(this.preferences);
  }

}
