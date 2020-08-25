import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISearchShow } from './../isearch-show';
import {ISearchShowData} from './../isearch-show-data';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) {}

    getSearchResult(search:String)
    {
      console.log("inside search res");
      return this.httpClient.get<ISearchShowData[]>(`http://api.tvmaze.com/search/shows?q=${search}`).pipe(map(data =>this.transformToIsearchshow(data)))
    }

    transformToIsearchshow(dataArray:ISearchShowData[]):ISearchShow[]
    {
      
      

      function stripTags(inputString:string): string
      {
        var re = /<[^>]+>/g;

        console.log('inside the function', inputString);
        return inputString.replace(re, '');
        
      }


      let result = new Array<ISearchShow>();
      var re = /<[^>]+>/gi;
      var strippedSummary;
  

      dataArray.forEach(showElement => {
        if(showElement.show.summary != null){
        console.log('before the call', showElement.show.summary);
        showElement.show.summary = stripTags(showElement.show.summary);
        console.log('after the call', showElement.show.summary);
        }
        result.push({             
            showid : showElement.show.id,     
            showName: showElement.show.name,
            language: showElement.show.language,
            avgRating: showElement.show.rating.average,
            officialSite: showElement.show.officialSite,
            genre:showElement.show.genre,
            image: showElement.show.image?.medium,
            description:showElement.show.summary,
            day:showElement.show.schedule.days,
            times: showElement.show.schedule.time,
            runTime:showElement.show.runtime,
        })
      
          console.log('after assignment', showElement.show.summary);
      });

      return result;
    }
    
    /*
    transformToIsearchshow(dataArray:ISearchShowData[]):ISearchShow[]
    {      
      console.log('inside tranform');
      console.log(dataArray);
      console.log("Total number of Shows is " + dataArray.length);

      let result = new Array<ISearchShow>();

      dataArray.forEach(showElement => {
        console.log("This show is " + showElement.show.name);
        console.log("Image URL is " + showElement.show.image?.medium);

        result.push({             
            showid : showElement.show.id,     
            showName: showElement.show.name,
            language: showElement.show.language,
            avgRating: showElement.show.rating.average,
            officialSite: showElement.show.officialSite,
            genre:showElement.show.genre,
            image: showElement.show.image?.medium,
            description:showElement.show.summary,
            day:showElement.show.schedule.days,
            times: showElement.show.schedule.time,
            runTime:showElement.show.runtime
        })
      });

      return result;
    }
    */
}
