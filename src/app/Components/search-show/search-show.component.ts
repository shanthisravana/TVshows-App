import { Component, OnInit, Input } from '@angular/core';
import {ISearchShow} from './../../isearch-show';
import { SearchService } from './../../Services/search.service';

@Component({
  selector: 'app-search-show',
  templateUrl: './../../Components/search-show/search-show.component.html',
  styleUrls: ['./../../Components/search-show/search-show.component.css']
})
export class SearchShowComponent implements OnInit {

  @Input() searchShow:ISearchShow[]
  constructor() {
 
   }

  ngOnInit(): void {
    
   
  }

}
