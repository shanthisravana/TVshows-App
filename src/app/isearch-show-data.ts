export interface ISearchShowData {
  show:{
      id:number
      name:string,
      language:string,
      runtime:number,
      officialSite:string,
      genre:string,
      schedule:{
        time:Date
        days:string
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