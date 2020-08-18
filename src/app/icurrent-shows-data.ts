import { stringify } from '@angular/compiler/src/util'

export interface ICurrentShowsData {
      
    id : number
    name : string,
    language: string,
    genres :[],
    runtime : number,
    schedule : {
      time : string,
      days : []
    },
    rating : {
      average : number
    },
    network:{
    country :{
      name : string,
      code : string,
      timezone : string
    }
    },
    image :{
      medium : string ,
    },
    summary : string ,
    _links : {
      self : {
        href : string,
      }
    }
  
      }
  


 

