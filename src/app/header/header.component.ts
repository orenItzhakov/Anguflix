import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart : Cart;
  appName : string = "Anguflix";

  constructor(private moviesService : MoviesService) {
    this.cart = moviesService.getMyCart();
  }

  ngOnInit() {
  }

  addMoney(){
    this.cart.money+=1;
    this.moviesService.saveCartInLocalStorage(); 
  }

  reduceMoney(){
    if(this.cart.money!=0){
      this.cart.money-=1;
      this.moviesService.saveCartInLocalStorage(); 
    }
  }

}
