import { Movie } from './movie';

export class Cart {
    movies : Array<Movie>;
    money : number;
    constructor() {
        this.money = 10;
        this.movies = new Array<Movie>();
    }
}
