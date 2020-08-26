import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

@Output() searchEvent= new EventEmitter<string>();
  
search=new FormControl('',[Validators.minLength(2)]);

constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe(data =>
      {
      if(!this.search.invalid){
      this.searchEvent.emit(data)
    }
  })
  }

}
