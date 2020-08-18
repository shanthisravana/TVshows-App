export interface ISearchShowData {
  name: string,
  language: string,
  runtime: number,
  rating:{
    average: number
  },
  genres: string,
  network:{
    name: string
  },
  schedule:{
    time: number,
    days: string
  }
}
