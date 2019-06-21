import { Component } from '@angular/core';
import { MovieapiService } from './movieapi.service';
import { MovieList } from './movielist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie';
  mov : MovieList
  list: object;
  constructor(private movie: MovieapiService){
    this.mov = new MovieList();
    this.list = [];
  }
  getdata()
  {
    this.movie.getMovie().subscribe(res=>{
    console.log('Values',res);
    this.list  = res;
    })
  }
}
