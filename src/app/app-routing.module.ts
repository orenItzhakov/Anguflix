import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'add-movie', component: AddMovieComponent},
  { path: 'show-movie/:id', component: ShowMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
