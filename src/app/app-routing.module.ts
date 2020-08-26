import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentShowsComponent } from './Components/current-shows/current-shows.component';
import { SeasonsEpisodesComponent } from './Components/seasons-episodes/seasons-episodes.component';
import { CurrentScheduleComponent } from './Components/current-schedule/current-schedule.component';
import { SearchShowComponent } from './Components/search-show/search-show.component';
import { SearchbarComponent } from './Components/searchbar/searchbar.component';

const routes: Routes = [
 {path:'',component:CurrentShowsComponent},
 {path:'show/:showid',component:SeasonsEpisodesComponent},
 {path:'shows/schedule/:curDate',component:CurrentScheduleComponent},
 {path:'shows/search',component:SearchShowComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
