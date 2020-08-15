import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ICurrentShowsData} from '../../icurrent-shows-data';
import { ICurrentShows } from '../../icurrent-shows';



@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient:HttpClient) { }
  
  getcurrentshows(){
    return this.httpClient.get<ICurrentShowsData>(`http://api.tvmaze.com/shows`);
  }

  transformToICurrentSchedule(data :ICurrentShowsData) : ICurrentShows{
  
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
    showruntime : data.show.runtime,
    showhref : data.show._links.self.href
    };

  }
}
