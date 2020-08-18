import { Component } from '@angular/core';
import { ISeasons } from './iseasons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentSeasons: ISeasons
  
}
