import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISeasonsData } from './iseasons-data';
import { environment } from 'src/environments/environment';
import { ISeasons } from './iseasons';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  constructor(private httpClient: HttpClient) { }

  getSeasons(episodeName: string) {
    return this.httpClient.get<ISeasonsData>(`http://api.tvmaze.com/shows/:id/seasons`).pipe(map(data => this.transformToISeasons(data)))
  }

  transformToISeasons(data: ISeasonsData): ISeasons {
    return {
      seasonsId: data.id,
      seasonsUrl: data.url,
      seasonsNumber: data.number,
      premiereDate: data.premiereDate,
      episodeOrder: data.episodeOrder,
      image: `http://api.tvmaze.com/shows/:id/images`,
      summary: data.summary
    }
  }
}
