export interface ISearchShowData {
  name: string,
  language: string,
  genres: [string],
  runtime: number,
  rating:{
    average: number
  },
  days:[string],
  time: number,
  network: {
    name: string
  }

}
