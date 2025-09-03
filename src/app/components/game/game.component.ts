import { Component } from '@angular/core';
import { MovieInfo } from '../../models/movieInfo.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-game',
  imports: [FormsModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  isLoading = false;
  showResult = false;
  userGuess: number = 0;

  currentMovie: MovieInfo | null = {
    id: 755898,
    poster_path: '/yvirUYrva23IudARHn3mMGVxWqM.jpg',
    release_date: '2025-07-29',
    title: 'War of the Worlds',
    vote_average: 4.319,
  };
}
