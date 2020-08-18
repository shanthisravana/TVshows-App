import { Component } from '@angular/core';
import { ISeasons } from './iseasons';
import { SeasonsService } from './seasons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSeasons: ISeasons

  constructor (private seasonsService: SeasonsService) {}
  }
  
