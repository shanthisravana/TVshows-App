import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentShowsComponent } from './Components/current-shows/current-shows.component';

const routes: Routes = [
 {path:'',component:CurrentShowsComponent}
//  {path:'/show/:showid',component:}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
