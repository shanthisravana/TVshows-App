import { Component, OnInit } from '@angular/core';
import { SEpisodesService } from '../../Services/s-episodes.service';

@Component({
  selector: 'app-seasons-episodes',
  templateUrl: './seasons-episodes.component.html',
  styleUrls: ['./seasons-episodes.component.css']
})
export class SeasonsEpisodesComponent implements OnInit {

  Scastsummary;
  seasons;
  episodes;

  constructor(private showdetails: SEpisodesService) { }

  ngOnInit(): void {
    this.showdetails.getcastandsummary().subscribe(data => this.Scastsummary = data);
    this.showdetails.getseasons().subscribe(data => this.seasons = data);
    this.showdetails.getseasonepisodes().subscribe(data => this.episodes = data);
  }

}
