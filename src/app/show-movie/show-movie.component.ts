import { Inject, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/platform-browser';
import { Review } from '../review';
import { BlockScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss'],
  providers: [NgbRatingConfig] 
})

export class ShowMovieComponent implements OnInit {

  movie : Movie;
  currentRate : number = 0;
  newReview : Review = new Review();
  scrool : boolean = true;
  constructor(@Inject(DOCUMENT) private document: any , private config: NgbRatingConfig , private moviesService : MoviesService, private route : ActivatedRoute, private router : Router) {
    config.max = 5;
    config.readonly = true;

    this.moviesService.movieObservable.subscribe((data)=>{
      this.movie = data;
      this.calcRate();
      if(this.scrool) this.scrollToMovie();
      this.newReview = new Review();
    });

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.moviesService.getMovie(params.id);
    });
  }

  calcRate(){
    var sum = 0;
    var items = 0;
    for (let i = 0; i < this.movie.reviews.length; i++) {
      if (this.movie.reviews[i]["rating"]){
        sum += this.movie.reviews[i]["rating"];
        items++;
      }
    }
    this.currentRate = sum / items;
  }

  scrollToMovie(){
    let stateCheck = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(stateCheck);
          window.scrollTo(0, 734);
      }
    }, 100);
    this.scrool = false;
  }

  addReview(){
    this.moviesService.addReviewToMovie(this.newReview , this.movie._id);
  }
}
