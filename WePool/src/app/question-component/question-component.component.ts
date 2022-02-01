import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponentComponent implements OnInit {

  @Input() question : string;
  @Input() type : string;

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.question)
    console.log(this.type)
  }

}
