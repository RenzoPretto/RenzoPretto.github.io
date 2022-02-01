import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponentComponent implements OnInit {

  @Input() question : string;
  @Input() type : string;
  input : string = "1";

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.question)
    console.log(this.type)
  }

  test() {
    console.log(this.input);
  }

  updateElement(event) {
    this.input = event.value;
  }

  updateCheckbox(event) {
    this.input = event.checked;
  }

  updateInput(event) {
    this.input = event.value;
  }

}
