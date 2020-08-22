import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-searchbar',
  templateUrl: './../../Components/searchbar/searchbar.component.html',
  styleUrls: ['./../../Components/searchbar/searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

@Output() searchEvent= new EventEmitter<string>();
  
search=new FormControl('',[Validators.minLength(2)]);

constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe(data =>
      {
      if(!this.search.invalid){
      this.searchEvent.emit(data)
    }
  })
  }

}
