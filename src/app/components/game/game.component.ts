import { Component, OnInit } from '@angular/core';
import { MovieInfo } from '../../models/movieInfo.model';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';
import { MoviesService } from '../../services/movies-service.service';
import { provideHttpClient } from '@angular/common/http';
@Component({
  selector: 'app-game',
  imports: [FormsModule, MatDialogModule, ResultDialogComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  providers: [MoviesService],
})
export class GameComponent implements OnInit {
  isLoading = false;
  showResult = false;
  userGuess: number = 0;

  currentMovie: MovieInfo = {
    id: 755898,
    poster_path: '/yvirUYrva23IudARHn3mMGVxWqM.jpg',
    release_date: '2025-07-29',
    title: 'War of the Worlds',
    vote_average: 4.319,
  };
  constructor(public dialog: MatDialog, private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getRandomMovie().subscribe((movie: MovieInfo) => {
      this.currentMovie = movie;
    });
  }

  submitGuess() {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { guess: this.userGuess, movie: this.currentMovie },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.moviesService.getRandomMovie().subscribe((movie: MovieInfo) => {
        this.currentMovie = movie;
      });
      this.userGuess = 0;
    });
  }
}
