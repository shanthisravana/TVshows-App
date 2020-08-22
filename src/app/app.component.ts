import { Component } from '@angular/core';
import { ISearchShow } from './../app/isearch-show';
import { SearchService } from './../app/Services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TVshows-App';

  currentShowName:ISearchShow[]

  constructor(private SearchService: SearchService){}
  doSearch(searchValue)
    {
        this.SearchService.getSearchResult(searchValue).subscribe(data => this.currentShowName = data)
  }
}
