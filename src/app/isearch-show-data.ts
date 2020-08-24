export interface ISearchShowData {
  show:{
      id:number
      name:string,
      language:string,
      runtime:number,
      officialSite:string,
      genre:[],
      schedule:{
        time:Date
        days:[]
      },

      rating:{
      average:number
      },
      image:{
        medium:string
      },
      summary:string
    }
}