import { Component } from '@angular/core';
import { MovieInfo } from '../../models/movieInfo.model';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';
@Component({
  selector: 'app-game',
  imports: [FormsModule, MatDialogModule, ResultDialogComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  isLoading = false;
  showResult = false;
  userGuess: number = 0;

  health: number = 100;

  currentMovie: MovieInfo | null = {
    id: 755898,
    poster_path: '/yvirUYrva23IudARHn3mMGVxWqM.jpg',
    release_date: '2025-07-29',
    title: 'War of the Worlds',
    vote_average: 4.319,
  };
  constructor(public dialog: MatDialog) {}

  submitGuess() {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      width: '400px',
      data: { guess: this.userGuess, movie: this.currentMovie },
    });
  }
}
