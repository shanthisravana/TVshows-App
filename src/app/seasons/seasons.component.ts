import { Component, OnInit, Input } from '@angular/core';
import {ISeasons} from '../iseasons';
import { SeasonsService } from '../seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  @Input () current: ISeasons
  constructor() {
   }
  ngOnInit(): void {
    }

}
