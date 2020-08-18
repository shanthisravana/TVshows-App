import { Component, OnInit, Input } from '@angular/core';
import {ISeasons} from '../iseasons';
import { SeasonsService } from '../seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  /* @Input () current: ISeasons */
  current: ISeasons
  constructor(private seasonsService: SeasonsService) {
    this.current = {
      seasonsId: 20
      seasonsUrl: 'http://api/shows/1/seasons',
      seasonsNumber: 40,
      premiereDate: 'september',
      episodeOrder: 5,
      seasonsImage: ''
    }
    }
    }
  ngOnInit(): void {
     this.seasonsService.getSeasons(seasonsId).subscribe(data => this.current = data)
     {}
    }

}
