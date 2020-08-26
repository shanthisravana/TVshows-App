import { Component, Input, Output } from '@angular/core';
import { ISearchShow } from './../app/isearch-show';
import { SearchService } from './../app/Services/search.service';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from './Services/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TVshows-App';
  myDate = new Date();
  currentShowName: ISearchShow[];
  
 



  constructor(private SearchService:SearchService,private route: ActivatedRoute,private ShowService:ShowsService){}
 
  doSearch(searchValue)
  {
    //window.location.href=`/shows/search`;
    this.SearchService.getSearchResult(searchValue).subscribe(data => this.currentShowName = data);
      
     
}
  getshowschedule(){
    const curDate = formatDate(this.myDate, 'yyyy-MM-dd', 'en-US');
    window.location.href=`/shows/schedule/${curDate}`;
  }

 gethomepage()
 {
   window.location.href=``;
 }
  
  getShowsByGenre(event) {
    var filter = event.id;
    console.log("valuegenre:" + event.id);
    
  
    window.location.href=`/shows/genre/${filter}`;
  }
  
 
}
