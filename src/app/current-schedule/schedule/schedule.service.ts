import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ICurrentScheduleData} from '../../icurrent-schedule-data';
import { ICurrentSchedule } from '../../icurrent-schedule';



@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient:HttpClient) { }
  
  getcurrentschedule(country:string){
    return this.httpClient.get<ICurrentScheduleData>(`http://api.tvmaze.com/schedule?country=${country}`);
  }

  transformToICurrentSchedule(data :ICurrentScheduleData) : ICurrentSchedule{
    return {
    showid : data.show.id,
    showname : data.show.name,
    showlanguage : data.show.language,
    showgenres : data.show.genres,
    showscheduletime : data.show.schedule.time,
    showscheduledays : data.show.schedule.days,
    showrating: data.show.rating.average,
    showimage :data.show.image.medium,
    showsummary :data.show.summary,
    showcountry : data.show.country.code,
    showruntime : data.show.runtime
    };

  }
}
