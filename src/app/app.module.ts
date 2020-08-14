import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentScheduleComponent } from './current-schedule/current-schedule.component';
import { SearchShowComponent } from './search-show/search-show.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentScheduleComponent,
    SearchShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
