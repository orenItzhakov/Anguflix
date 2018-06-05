import { Component, OnInit ,Input , Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie = new Movie();
  @Input() collection :boolean;
  @Input() mode :boolean;
  @Output() addColl : EventEmitter<Movie> = new EventEmitter();
  @Output() deleteMovie : EventEmitter<Movie> = new EventEmitter();

  constructor(private router : Router) { }
  
  ngOnInit() {
  }

  addToMyColl(movie : Movie){
    this.addColl.emit(movie);
  }

  deleteFromColl(movie : Movie){
    this.deleteMovie.emit(movie);
  }

  showMovie(id){
    this.router.navigate(['/show-movie/' + id]);
  }

}
