import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISearchShow } from './isearch-show';
import { ISearchShowData} from './isearch-show-data'
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getSearchResult(showname: string){

    return this.httpClient.get<ISearchShowData>(
      `http://api.tvmaze.com/singlesearch/shows?q=${showname}`).pipe(
      map(data => this.transformToISearchShow(data))
    )
  }

  transformToISearchShow(data: ISearchShowData):ISearchShow {
    /*
    console.log("Inside transformToISearchShow");
    console.log(data.name);
    console.log(data.runtime);
    */
    return {
      name: data.name,
      language: data.language,
      runtime: data.runtime,
      rating: data.rating.average,
      genres: data.genres,
      network: data.network.name,
      days: data.schedule.days,
      time: data.schedule.time
    }

  }
}
