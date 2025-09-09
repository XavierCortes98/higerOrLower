import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../../services/game-manager.service';
import { MovieInfo } from '../../models/movieInfo.model';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-game',
  imports: [MovieCardComponent, ProgressBarComponent],
  templateUrl: './end-game.component.html',
  styleUrl: './end-game.component.scss',
})
export class EndGameComponent implements OnInit {
  movieHistory: MovieInfo[] = [];
  sliderWith: number = 0;
  totalPoints: number = 0;
  maxPoints: number = 0;
  constructor(
    private gameManager: GameManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieHistory = this.gameManager.getMovieHistory;
    this.totalPoints = this.gameManager.totalPoints;
    this.maxPoints =
      this.gameManager.getMaxPointsPerRoundValue *
      this.gameManager.getLimitOfRoundValue;
    this.sliderWith = this.calculateSliderWidth();
  }

  calculateSliderWidth(): number {
    return (this.totalPoints / this.maxPoints) * 100;
  }

  playAgain(): void {
    this.gameManager.resetGame();
    this.router.navigate(['/game']);
  }
}
