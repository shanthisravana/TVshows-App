import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ICurrentShowsData} from '../../icurrent-shows-data';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient:HttpClient) { }


  getcurrentshows(){
    return this.httpClient.get<ICurrentShowsData>(`http://api.tvmaze.com/shows`);
  }
  
  
}
