import { Component, OnInit } from '@angular/core';
import { ISearchShow } from '../isearch-show'

@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.css']
})
export class SearchShowComponent implements OnInit {

  current: ISearchShow
  constructor() {
    this.current = {
      name: 'Girls',
      language: 'English',
      genres: 'Drama',
      runtime: 80,
      rating: 4.5,
      days: 'Monday',
      time: new Date(),
      network: 'HBO'
    }
   }

  ngOnInit(): void {
  }

}
