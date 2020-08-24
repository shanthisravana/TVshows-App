import { Component } from '@angular/core';
import { ISearchShow } from './../app/isearch-show';
import { SearchService } from './../app/Services/search.service';
import { formatDate } from '@angular/common';
import { ICurrentShowsData} from './icurrent-shows-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TVshows-App';
  myDate = new Date();
  currentShowName:ISearchShow[];
  genrefilter:ICurrentShowsData;
  
  constructor(private SearchService:SearchService){}
 
  doSearch(searchValue)
  {
    this.SearchService.getSearchResult(searchValue).subscribe(data => this.currentShowName = data);
      
      
     // window.location.href=`/shows/search`;
}
  getshowschedule(){
    const curDate = formatDate(this.myDate, 'yyyy-MM-dd', 'en-US');
    window.location.href=`/shows/schedule/${curDate}`;
  }



 
}
