import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISearchShowData} from './isearch-show-data'
import { environment } from 'src/environments/environment';
import { ISearchShow } from './isearch-show';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getSearchResult(showname: string){
    return this.httpClient.get<ISearchShowData>(
      `http://api.tvmaze.com/search/shows?q=${showname}`
    )
  }

  transformToISearchShow(data: ISearchShowData):ISearchShow {
    return {
      name: data.name,
      language: data.language,
      genres: data.genres[0],
      runtime: data.runtime,
      rating: data.rating.average,
      days: data.days[0],
      time: new Date(data.time),
      network: data.network.name

    }

  }
}
