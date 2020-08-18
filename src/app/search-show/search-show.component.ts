import { Component, OnInit } from '@angular/core';
import { ISearchShow } from '../isearch-show'
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.css']
})
export class SearchShowComponent implements OnInit {

  current: ISearchShow
  constructor(private searchService: SearchService) {
    
   }

  ngOnInit(): void {
    this.searchService.getSearchResult('girls').
    subscribe(data => this.current = data)
  }

}
