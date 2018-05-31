import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})

export class AddMovieComponent implements OnInit {
  movie : object ;
  constructor(private moviesService : MoviesService,private router: Router) {
    this.movie =   {img:undefined,title:undefined, price:undefined, year:undefined, descrShort:undefined} ;
  }

  ngOnInit() {
  }
  
  addMovie(){
    this.moviesService.addNewMovie(this.movie);
    this.router.navigate(['.']);
  }

}
