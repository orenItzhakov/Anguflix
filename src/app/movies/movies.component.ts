import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies:Array<Movie>;
  filterTerm : string;
  loadingIndicator : boolean = true;

  constructor(private moviesService : MoviesService) {
    this.moviesService.moviesObservable.subscribe((data)=>{
      this.movies = data;
      this.loadingIndicator = false;
    });
  }

  ngOnInit() {
  } 

  addToMyCollection(movie:Movie) {
    this.moviesService.addMovie(movie);
  }

  onSearchChange( searchVal :string){
    this.moviesService.searchMovies(searchVal);
  }
}
