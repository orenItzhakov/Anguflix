import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterPipe2 } from './pipes/filter2.pipe';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CollectionComponent } from './collection/collection.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule,MatInputModule } from '@angular/material';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FilterPipe2,
    MoviesComponent,
    CollectionComponent,
    MovieComponent,
    HeaderComponent,
    HomepageComponent,
    AddMovieComponent, 
    ShowMovieComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,    
    NgbModule.forRoot(),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
