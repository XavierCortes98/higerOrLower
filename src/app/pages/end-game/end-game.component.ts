import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../../services/game-manager.service';
import { MovieInfo } from '../../models/movieInfo.model';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-end-game',
  imports: [MovieCardComponent],
  templateUrl: './end-game.component.html',
  styleUrl: './end-game.component.scss',
})
export class EndGameComponent implements OnInit {
  movieHistory: MovieInfo[] = [];

  constructor(private gameManager: GameManagerService) {}

  ngOnInit(): void {
    this.movieHistory = this.gameManager.getMovieHistory;
    console.log(this.movieHistory);
  }
}
