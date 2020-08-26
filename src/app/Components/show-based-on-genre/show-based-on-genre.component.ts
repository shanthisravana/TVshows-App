import { Component, OnInit, Input } from '@angular/core';
import { ShowsService } from 'src/app/Services/shows/shows.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-based-on-genre',
  templateUrl: './show-based-on-genre.component.html',
  styleUrls: ['./show-based-on-genre.component.css']
})
export class ShowBasedOnGenreComponent implements OnInit {

  filteredlistafter = Array<object>();
  gen: string[];
  filter;
  filteredlistbefore;
  constructor(private ShowService: ShowsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filter = this.route.snapshot.params.filter;
    this.ShowService.getcurrentshows().subscribe(data => {
      for (var i in data) {
        this.gen = data[i].genres;
        if (this.gen.indexOf(this.filter) !== -1) {
          console.log("contains", this.gen);
          console.log("filteredlistbefore:", data[i].name);
          
          this.filteredlistafter.push({
            image: data[i].image.medium,
            name: data[i].name,
            id: data[i].id
          
          
          
          })
        }
      }
  
      this.filteredlistbefore = data;


    });

  
 
  
  }


  getshowsdetails(showid:number){
    window.location.href=`/show/${showid}`;
    


  }
}
