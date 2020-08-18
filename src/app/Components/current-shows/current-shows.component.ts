import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';
import { CompiledStylesheet } from '@angular/compiler';
import { ShowsService } from '../../Services/shows/shows.service';
@Component({
  selector: 'app-current-shows',
  templateUrl: './current-shows.component.html',
  styleUrls: ['./current-shows.component.css']
})
export class CurrentShowsComponent implements OnInit {
  allshows;
  constructor(private showsService : ShowsService) {

    
  }
  ngOnInit(): void {
    this.showsService.getcurrentshows().subscribe(data => this.allshows = data);
  }

  getshowsdetails(showid:number){
    window.location.href=`/show/${showid}`;


  }

  
}

