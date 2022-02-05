import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question : string;
  @Input() type : string;
  input : string = "1";
  @ViewChild('inputText') inputText: HTMLInputElement;


  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.question)
    console.log(this.type)
  }

  updateElement(event) {
    this.input = event.value;
  }

  updateCheckbox(event) {
    this.input = event.checked;
  }

  updateInput(event) {
    this.input = this.inputText.value;
  }

}
