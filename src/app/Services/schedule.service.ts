import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentScheduleData } from './../icurrent-schedule-data';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient : HttpClient) { }

  getCurrentSchedule(country: string,curdate: Date){
    console.log("country"+country);
    console.log("date"+curdate);
    return this.httpClient.get<ICurrentScheduleData>(`http://api.tvmaze.com/schedule?country=${country}&date=${curdate}`);
  }
}
