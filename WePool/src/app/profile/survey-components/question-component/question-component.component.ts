import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
//Individual questions loaded into component and stores current input
export class QuestionComponent implements OnInit {

  @Input() question : string;
  @Input() type : string;
  input : string;
  @ViewChild('inputText') inputText: HTMLInputElement;


  constructor() { 
  }

  ngOnInit(): void {
    
  }

  //Following three update the input value in this class whenever a change is made on the page
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
