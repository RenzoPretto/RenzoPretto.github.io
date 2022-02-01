import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-loader',
  templateUrl: './question-loader.component.html',
  styleUrls: ['./question-loader.component.css']
})
export class QuestionLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  questions = [{question: "When I ride, I am talkative and love to catch up with my coworkers about their out of work happenings! When I ride, I am talkative and love to catch up with my coworkers about their out of work happenings! ", type: "textbox"}, {question: "When I ride, I am talkative and love to catch up with my coworkers about their out of work happenings! When I ride, I am talkative and love to catch up with my coworkers about their out of work happenings! ", type: "slider"}];

}
