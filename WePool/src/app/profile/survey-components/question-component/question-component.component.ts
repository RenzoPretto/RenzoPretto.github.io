import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
//Individual questions loaded into component and stores current input
export class QuestionComponent implements OnInit {

  @Input() question : string;
  @Input() type : string;
  @Output() input : string;
  @ViewChild('inputText') inputText: HTMLInputElement;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  updateItem(value: string) {
    this.newItemEvent.emit(value);
  }
  
  //Following three update the input value in this class whenever a change is made on the page
  updateElement(event) {
    this.input = event.value;
    this.updateItem(this.input);
  }

  updateCheckbox(event) {
    this.input = event.checked;
    this.updateItem(this.input);
  }

  updateInput(event) {
    this.input = this.inputText.toString();
    this.updateItem(this.input);
  }

}
