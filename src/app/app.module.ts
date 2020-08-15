import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentScheduleComponent } from './current-schedule/current-schedule.component';
import { SeasonsComponent } from './seasons/seasons.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentScheduleComponent,
    SeasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
