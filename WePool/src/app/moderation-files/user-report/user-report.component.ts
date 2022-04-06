import { Component, OnInit } from '@angular/core';
import { GroupServiceService } from 'src/app/services/group-service/group-service.service';

@Component({
  selector: 'user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {

  constructor(public userService : GroupServiceService) { }

  ngOnInit(): void {
  }

  sendReport(report: string) {
    this.userService.sendReport(report);
  }

}
