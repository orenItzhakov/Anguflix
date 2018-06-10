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

  movies = new Array<Movie>();
  moviesSubject : Subject<Movie[]> = new Subject<Movie[]>();
  moviesObservable:Observable<Movie[]>;
  
  movie : any;
  movieSubject : Subject<Movie> = new Subject<Movie>();
  movieObservable:Observable<Movie>;

  constructor(private http : HttpClient) {
    this.moviesObservable = this.moviesSubject.asObservable();
    this.getMovies();

    this.movieObservable = this.movieSubject.asObservable();
  }

  getMovies() : void {
    this.http.get<Movie[]>( API +'/movies').subscribe((data)=>{
      this.movies = data;
      this.moviesSubject.next(this.movies);
    });
  }   

  searchMovies(searchVal : string ) : void {
    this.http.get<Movie[]>( API +'/movies?title=' + searchVal).subscribe((data)=>{
      this.movies = data;
      this.moviesSubject.next(this.movies);
    });
  } 

  getMovie(id : string ) : void {
    this.http.get<Movie>( API +'/movies/' + id).subscribe((data)=>{
      this.movies[id] = data;
      this.movieSubject.next(this.movies[id]);
    });
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

  addReviewToMovie(newReview : Review , id : any) : void{  
    this.http.post( API +'/movies/' + id + '/reviews' , newReview).subscribe((data)=>{
      this.movie = data;
      this.movieSubject.next(this.movie);
    });
  }

}
