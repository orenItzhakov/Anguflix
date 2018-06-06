import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject ,Observable } from 'rxjs';
import { Movie } from './movie';
import { Cart } from './cart';
import { Review } from './review';

const API = "https://anguflix-api.herokuapp.com/api";

var idCurr : number = 5;
const myCart : Cart = localStorage.getItem('myCart') ? JSON.parse(localStorage.getItem('myCart')) : new Cart();

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }

  getMovies() : Observable<Movie[]> {
    return this.http.get<Movie[]>( API +'/movies');
  } 

  searchMovies(searchVal : string ) : Observable<Movie[]> {
    return this.http.get<Movie[]>( API +'/movies?title=' + searchVal);
  } 

  getMovie(id : string ) : Observable<Movie> {
    return this.http.get<Movie>( API +'/movies/' + id);
  } 

  getMyCart() : Cart {
    return myCart;
  }

  saveCartInLocalStorage() {
    localStorage.setItem('myCart', JSON.stringify(myCart));
  }

  addMovie(movie : Movie){
    if (!myCart.movies.includes(movie) && myCart.money-movie.price >= 0){
      myCart.movies.push(movie);
      myCart.money -= movie.price;
      this.saveCartInLocalStorage();
    }
  }

  addReviewToMovie(newReview : Review , id : any) : any{
    return this.http.post( API +'/movies/' + id + '/reviews' , newReview);
  }

}
