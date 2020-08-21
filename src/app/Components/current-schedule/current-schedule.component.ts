import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './../../Services/schedule.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-current-schedule',
  templateUrl: './current-schedule.component.html',
  styleUrls: ['./current-schedule.component.css']
})
export class CurrentScheduleComponent implements OnInit {
  schedules;
  countrycode: string;
  currentdate: Date;
  constructor(private showSchedule : ScheduleService,private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.currentdate = this.route.snapshot.params.curDate;
  
    this.countrycode = 'US';
    this.showSchedule.getCurrentSchedule(this.countrycode,this.currentdate).subscribe(data => this.schedules = data);
  }

}
