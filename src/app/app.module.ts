import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentScheduleComponent } from './current-schedule/current-schedule.component';
import { ScheduleService } from './current-schedule/schedule/schedule.service';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CurrentScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
