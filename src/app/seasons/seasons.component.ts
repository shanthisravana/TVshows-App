import { Component, OnInit } from '@angular/core';
import {ISeasons} from '../iseasons';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  current: ISeasons
  constructor(private seasonsService: SeasonsService) {
   }

  ngOnInit(): void {
    this.seasonsService.getSeasons('episodeName').subscribe(data => this.current = data)
  }

}
