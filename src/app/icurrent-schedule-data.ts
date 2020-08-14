export interface ICurrentScheduleData {
  show : {
    id : number,
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
    country :{
      name : string,
      code : string,
      timezone : string
    },
    image :{
      medium : string
    },
    summary : string

  }
}
