import { Component, OnInit } from '@angular/core';
import { SEpisodesService } from '../../Services/s-episodes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seasons-episodes',
  templateUrl: './seasons-episodes.component.html',
  styleUrls: ['./seasons-episodes.component.css']
})
export class SeasonsEpisodesComponent implements OnInit {

  Scastsummary;
  seasons;
  episodes;
  showid:number;
  seasonid:number;

  constructor(private showdetails: SEpisodesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showid = this.route.snapshot.params.showid;
    this.showdetails.getcastandsummary(this.showid).subscribe(data => this.Scastsummary = data);
    this.showdetails.getseasons(this.showid).subscribe(data => this.seasons = data);
   
  }

  getseasonID(seasonId: number){
   this.seasonid = seasonId;
   this.showdetails.getseasonepisodes(this.seasonid).subscribe(data => this.episodes = data);
  }


}
