import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import {ICurrentShows } from '../icurrent-shows'
import { CompiledStylesheet } from '@angular/compiler';
@Component({
  selector: 'app-current-shows',
  templateUrl: './current-shows.component.html',
  styleUrls: ['./current-shows.component.css']
})
export class CurrentShowsComponent implements OnInit {
  current: ICurrentShows
  constructor() { 
    this.current = {
    showid: 1,
    showname : 'The Young and the Restless',
    showlanguage : 'English',
    showgenres : ["Drama","Family","Comedy"],
    showscheduletime : '12:30',
    showscheduledays : ["Monday","Tuesday","Wednesday","Thursday","Friday"],
     
    showrating: 7.8,
    showimage : "http://static.tvmaze.com/uploads/images/medium_portrait/233/583614.jpg",
    showsummary :"<p><b>The Young and the Restless</b> revolves around the rivalries, romances, hopes and fears of the residents of the fictional Midwestern metropolis, Genoa City. The lives and loves of a wide variety of characters mingle through the generations, dominated by the Newman, Abbott, Chancellor, Baldwin and Winters families. ­ When The Young and the Restless premiered in 1973, it revolutionized the daytime drama. It continues to set the standard with strong characters, socially conscious storylines, romance and sensuality.</p>",
    showcountry : 'USA',
    showruntime : 60 ,
    showhref : "http://api.tvmaze.com/shows/1"
    }
  }
  ngOnInit(): void {
  }

   sdays = function (){
    return this.current.showscheduledays.values();
  }

  

}
