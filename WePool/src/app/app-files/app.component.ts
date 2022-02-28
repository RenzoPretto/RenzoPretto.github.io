import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  questions = [{question: "When I ride, I am talkative and love to catch up with my coworkers about their out of work happenings! When I ride, I am talkative and love to catch up with my coworkers about their out of work happenings! When I ride, I am talkative and love to catch up with my coworkers about their out of work happenings!", type: "checkbox"}, 
                {question: "Question 2", type: "slider"}];
}
