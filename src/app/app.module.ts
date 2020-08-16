import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentScheduleComponent } from './current-schedule/current-schedule.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonsService } from './seasons.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from @angular/material/card;
import { MatToolbarModule } from @angular/materal/toolbar;

@NgModule({
  declarations: [
    AppComponent,
    CurrentScheduleComponent,
    SeasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [SeasonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
