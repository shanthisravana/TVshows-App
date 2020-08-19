import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentShowsComponent } from './Components/current-shows/current-shows.component';
import { ShowsService } from './Services/shows/shows.service';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCard, MatCardModule } from '@angular/material/card';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SeasonsEpisodesComponent } from './Components/seasons-episodes/seasons-episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentShowsComponent,
    SeasonsEpisodesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [ShowsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
