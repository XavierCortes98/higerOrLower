import { Component, Input } from '@angular/core';
import { MovieInfo } from '../../models/movieInfo.model';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-movie-card',
  imports: [ProgressBarComponent],
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie: MovieInfo = {
    id: 0,
    title: '',
    release_date: '',
    vote_average: 0,
    poster_path: '',
  };
}
