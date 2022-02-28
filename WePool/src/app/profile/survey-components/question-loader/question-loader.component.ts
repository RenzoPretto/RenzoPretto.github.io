import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

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

  @Input() questions;
  @Input() items = [];
  @Output() newItemEvent = new EventEmitter<string[]>();

  setResult(newItem: string, pos: number) {
    this.items[pos] = newItem;
  }

  pushResults() {
    this.newItemEvent.emit(this.items);
  }

}
