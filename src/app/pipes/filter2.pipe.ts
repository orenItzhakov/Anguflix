import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie';

@Pipe({
  name: 'filterByColl',
  pure: false
})
export class FilterPipe2 implements PipeTransform {

  movieSearch : Array<Movie>;

  transform(movies: Array<Movie>, filterString:any): Array<Movie> {
    return (filterString.title == undefined && filterString.year == undefined) ? movies :
     movies.filter((movie) => 
              (filterString.title == undefined || movie.title.toLowerCase().includes(filterString.title.toLowerCase())) 
              && 
              (filterString.year == undefined || movie.year==filterString.year || filterString.year == "" ));
  }

}
