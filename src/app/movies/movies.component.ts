import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies = new Array<Movie>();
  filterTerm : string;
  loadingIndicator : boolean = true;

  constructor(private moviesService : MoviesService) {
  }

  ngOnInit() {
    this.setMovies();
  } 

  setMovies() {
    this.moviesService.getMovies().subscribe((movies) => { 
      this.movies = movies;
      this.loadingIndicator = false;
    });
  }

  addToMyCollection(movie:Movie) {
    this.moviesService.addMovie(movie);
  }

  onSearchChange( searchVal :string){
    this.moviesService.searchMovies(searchVal).subscribe((movies) => { 
      this.movies = movies;
    });
  }
}
