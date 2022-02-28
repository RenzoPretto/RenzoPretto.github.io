import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
//Component created to handle styling of survey page without touching other areas
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  questions = [{question: "When I ride, I am talkative and love to catch up with my coworkers about their out of work happenings!", type: "slider"},
               {question: "My full name is...", type: "textbox"},
               {question: "Food in the car?", type: "checkbox"}];
  items = [];

  addItem(newItem: string[]) {
    this.items = newItem;
  }

}
