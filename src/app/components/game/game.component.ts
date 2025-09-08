import { Component, OnInit } from '@angular/core';
import { MovieInfo } from '../../models/movieInfo.model';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';
import { MoviesService } from '../../services/movies-service.service';
import { Router } from '@angular/router';
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
    id: 0,
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: 0,
  };
  constructor(
    public dialog: MatDialog,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.moviesService.getRandomMovie().subscribe((movie: MovieInfo) => {
      this.currentMovie = movie;
      console.log('new movie: ', this.currentMovie);
    });
  }

  submitGuess() {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      width: '400px',
      disableClose: true,
      data: { guess: this.userGuess, movie: this.currentMovie },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'end') {
        this.router.navigate(['/endgame']);
        return;
      }

      this.moviesService.getRandomMovie().subscribe((movie: MovieInfo) => {
        this.currentMovie = movie;
      });
      this.userGuess = 0;
    });
  }
}
