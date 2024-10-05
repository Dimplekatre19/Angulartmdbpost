import { Component, OnInit } from '@angular/core';
import { Ipost } from './shared/models/post';
import { post } from './shared/consts/post';
import { Imovie } from './shared/models/movie';
import { moviearr } from './shared/consts/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test3';
  postData!:Array<Ipost>
  movieData!:Array<Imovie>
  ngOnInit(): void {
     this.postData=post
     this.movieData=moviearr
  }
}
