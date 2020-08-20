import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowCastAndSummaryData } from '../../app/ishow-cast-and-summary-data';
import { IShowSeasonsData } from '../../app/ishow-seasons-data';
import { IShowEpisodesData } from '../../app/ishow-episodes-data';
@Injectable({
  providedIn: 'root'
})
export class SEpisodesService {

  constructor(private httpClient:HttpClient) { }

  getcastandsummary(showId:number){
    console.log("showid:"+ showId);
    return this.httpClient.get<IShowCastAndSummaryData>(`http://api.tvmaze.com/shows/${showId}?embed=cast`);

  }

  getseasons(showId:number)
    {
      return this.httpClient.get<IShowSeasonsData>(`http://api.tvmaze.com/shows/${showId}/seasons`);
    }
  
 getseasonepisodes(seasonId:number)
 {
   console.log("season id:"+seasonId);
   return this.httpClient.get<IShowEpisodesData>(`http://api.tvmaze.com/seasons/${seasonId}/episodes`);
 }
}
