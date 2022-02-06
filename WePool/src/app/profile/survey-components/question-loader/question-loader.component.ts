import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-loader',
  templateUrl: './question-loader.component.html',
  styleUrls: ['./question-loader.component.css']
})
//Component created to handle formatting of how questions will load in and load questions into question components
export class QuestionLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  questions = [{question: "When I ride, I am talkative and love to catch up with my coworkers about their out of work happenings!", type: "slider"},
               {question: "My full name is...", type: "textbox"},
               {question: "Food in the car?", type: "checkbox"}];

}
