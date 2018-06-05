import {Review} from "./review";

export class Movie {
    public _id : number;
    public year : number;
    public price : number;
    public imgUrl : string;
    public title : string;
    public shortDescription : string;
    public fullDescription : string;
    public director : string;
    public reviews : Array<Review> = new Array<Review>();
    constructor() {}
}
