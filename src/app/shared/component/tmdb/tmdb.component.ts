import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../models/movie';

@Component({
  selector: 'app-tmdb',
  templateUrl: './tmdb.component.html',
  styleUrls: ['./tmdb.component.scss']
})
export class TmdbComponent implements OnInit {
  @Input() movieObj!:Imovie;
  constructor() { }

  ngOnInit(): void {
  }

}
