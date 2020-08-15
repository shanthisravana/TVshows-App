import { Component, OnInit } from '@angular/core';
import {ISeasons} from '../iseasons';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  current: ISeasons
  constructor() {
    this.current = {
      seasonId: 5,
      episodeNumber: 13,
      premierDate: 'May 4, 2010',
      episodeName: 'The Girls',
      episodeOrder: 4,
      image: '',
      summary: 'dummy description of the season shows'
    }
   }

  ngOnInit(): void {
  }

}
