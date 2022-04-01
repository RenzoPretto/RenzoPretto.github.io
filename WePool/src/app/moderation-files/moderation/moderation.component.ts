import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-mod',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.css']
})
export class ModerationComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Carpool Groups', cols: 1, rows: 1 },
          { title: 'User Join Requests', cols: 1, rows: 1 },
          { title: 'Issues', cols: 1, rows: 1 },
          { title: 'Company Join Requests', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Carpool Groups', cols: 2, rows: 1 },
        { title: 'User Join Requests', cols: 1, rows: 1 },
        { title: 'Issues', cols: 1, rows: 2 },
        { title: 'Company Join Requests', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
