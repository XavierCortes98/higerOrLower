import { Component, Input } from '@angular/core';
import { MovieInfo } from '../../models/movieInfo.model';

@Component({
  selector: 'app-sort-card',
  imports: [],
  templateUrl: './sort-card.component.html',
  styleUrl: './sort-card.component.scss',
})
export class SortCardComponent {
  @Input() movie: MovieInfo = {
    id: 0,
    title: '',
    release_date: '',
    vote_average: 0,
    poster_path: '',
  };
}
