import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { GameManagerService } from '../../services/game-manager.service';
import { MovieInfo } from '../../models/movieInfo.model';

@Component({
  selector: 'app-result-dialog',
  standalone: true,
  imports: [MatDialogModule, ProgressBarComponent],
  templateUrl: './result-dialog.component.html',
  styleUrl: './result-dialog.component.scss',
})
export class ResultDialogComponent implements OnInit {
  points = 0;
  userGuess = 0;
  movieAvgPoints = 0;
  currentRound = 0;
  constructor(
    public dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gameManager: GameManagerService
  ) {}

  ngOnInit(): void {
    this.userGuess = this.data.guess;
    this.movieAvgPoints = this.data.movie.vote_average;
    this.currentRound = this.gameManager.getActualRound;

    this.points = this.calculatePoints();
    this.addPointsToTotal();
    this.addRound();
    this.addMovieToHistory(this.data.movie);
  }

  calculatePoints(): number {
    const maxDifference = 3; // Maximum difference to still earn points
    const difference = Math.abs(this.userGuess - this.movieAvgPoints);

    if (difference >= maxDifference) {
      return 0;
    }
    const points = Math.round(
      ((maxDifference - difference) / maxDifference) * 1000
    );
    return points;
  }

  addRound(): void {
    this.gameManager.addRound();
  }

  addPointsToTotal(): void {
    this.gameManager.addPoints(this.points);
  }

  addMovieToHistory(movie: MovieInfo): void {
    const movieWithUserData = {
      ...movie,
      points: this.points,
      userGuess: this.userGuess,
    };
    this.gameManager.pushMovieToHistory(movieWithUserData);
  }

  endGame(): void {
    this.dialogRef.close('end');
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
