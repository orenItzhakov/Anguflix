import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie';

@Pipe({
  name: 'filterByMovie'
})
export class FilterPipe implements PipeTransform {

  transform(movies: Array<Movie>, filterString: string): Array<Movie> {
    return filterString == undefined ? movies : movies.filter((movie) => movie.title.toLowerCase().includes(filterString.toLowerCase()));
  }

}
