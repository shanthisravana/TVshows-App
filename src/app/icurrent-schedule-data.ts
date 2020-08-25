export interface ICurrentScheduleData {
  
  show :{
    id : number 
    name : string
    runtime : number
    type : string
  schedule : {
    time : string
    days : []
  }
  network :{
    name : string
    country : string
    code : string
    timezone : string
  }
    webChannel: {
    name:string
  }

}
}
