import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISeasonsData } from './iseasonsdata';
import { ISeasons } from './iseasons';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  constructor(private httpClient: HttpClient) { }

  getSeasons(episodeName: string) {
    return this.httpClient.get<ISeasonsData>(`http://shows/:id/seasons`)
  }

  transformToISeasons(data: ISeasonsData): ISeasons {
    return {
      seasonId: data.id,
      episodeNumber: data.number,
      premierDate: data.premiereDate,
      episodeName: data.name,
      episodeOrder: data.episodeOrder,
      image: `http://shows/:id/images`,
      summary: data.summary
    }
  }
}
