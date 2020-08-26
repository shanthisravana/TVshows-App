import { DecimalPipe } from '@angular/common';

export interface IShowCastAndSummaryData {
  id : number
  name: string
  language: string
  image : {
    medium : string
  }
  summary : string
  _embedded : {
    cast :[
      {
        person :{
          name : string
        }
      }
    ]

    }
    schedule :{
      time : string
      days :[]
    }
  rating: {
     average:number 
    }
  }


