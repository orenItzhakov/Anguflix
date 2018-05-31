import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { Cart } from '../cart';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  cart : Cart;
  myMovies : Array<Movie>;
  yearsRange : Array<number> ;
  removeMode : boolean = false;
  movieYear : string = "";
  
  constructor(private moviesService : MoviesService) {
    this.cart = moviesService.getMyCart();
    this.myMovies = this.cart.movies;
    this.yearsRange = Array.from({length: 50}, (x,i) => i+1969);
    
  }
  ngOnInit() {
  }

  deleteMovieFromCollection(movie :Movie){
    this.cart.money += movie.price;
    var index = this.cart.movies.indexOf(movie);
    this.cart.movies.splice(index,1);
  }

}
