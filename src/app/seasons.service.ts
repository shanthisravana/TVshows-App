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
    return this.httpClient.get<ISeasonsData>(`http://shows/:id/seasons`).pipe(map(data => this.transformToISeasons(data)))
  }

  transformToISeasons(data: ISeasonsData): ISeasons {
    return {
      seasonId: data.id,
      episodeNumber: data.number,
      premiereDate: data.premiereDate,
      episodeName: data.name,
      episodeOrder: data.episodeOrder,
      image: `http://shows/:id/images`,
      summary: data.summary
    }
  }
}
