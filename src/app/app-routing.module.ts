import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentShowsComponent } from './Components/current-shows/current-shows.component';
import { SeasonsEpisodesComponent } from './Components/seasons-episodes/seasons-episodes.component';
import { CurrentScheduleComponent } from './Components/current-schedule/current-schedule.component';
const routes: Routes = [
 {path:'',component:CurrentShowsComponent},
 {path:'show/:showid',component:SeasonsEpisodesComponent},
 {path:'show/schedule/:curDate',component:CurrentScheduleComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
