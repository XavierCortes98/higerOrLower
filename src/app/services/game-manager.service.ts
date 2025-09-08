import { Injectable } from '@angular/core';
import { MovieInfo } from '../models/movieInfo.model';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  totalPoints: number = 0;
  actualRound: number = 1;

  movieHistory: MovieInfo[] = [
    {
      id: 174772,
      title: 'Europa One',
      release_date: ' 2011-11-11',
      vote_average: 0,
      poster_path:
        'https://image.tmdb.org/t/p/w500/7qXre8FTMGQbVd604Qoo8sBKm3a.jpg',
      userGuess: 4,
      points: 243,
    },
    {
      id: 1985,
      title: 'El jardinero fiel',
      release_date: ' 2011-11-11',
      vote_average: 0,
      poster_path:
        'https://image.tmdb.org/t/p/w500/yvirUYrva23IudARHn3mMGVxWqM.jpg',
      userGuess: 6,
      points: 6665,
    },
    {
      id: 174771,
      title: 'Europa One',
      release_date: ' 2011-11-11',
      vote_average: 0,
      poster_path:
        'https://image.tmdb.org/t/p/w500/7qXre8FTMGQbVd604Qoo8sBKm3a.jpg',
      userGuess: 4,
      points: 243,
    },
    {
      id: 1987,
      title: 'El jardinero fiel',
      release_date: ' 2011-11-11',
      vote_average: 0,
      poster_path:
        'https://image.tmdb.org/t/p/w500/yvirUYrva23IudARHn3mMGVxWqM.jpg',
      userGuess: 6,
      points: 6665,
    },
    {
      id: 174773,
      title: 'Europa One',
      release_date: ' 2011-11-11',
      vote_average: 0,
      poster_path:
        'https://image.tmdb.org/t/p/w500/7qXre8FTMGQbVd604Qoo8sBKm3a.jpg',
      userGuess: 4,
      points: 243,
    },
    {
      id: 1986,
      title: 'El jardinero fiel',
      release_date: ' 2011-11-11',
      vote_average: 0,
      poster_path:
        'https://image.tmdb.org/t/p/w500/yvirUYrva23IudARHn3mMGVxWqM.jpg',
      userGuess: 6,
      points: 6665,
    },
  ];

  constructor() {}

  get getTotalPoints(): number {
    return this.totalPoints;
  }

  get getActualRound(): number {
    return this.actualRound;
  }

  get getMovieHistory(): MovieInfo[] {
    return this.movieHistory;
  }

  addRound(): void {
    this.actualRound += 1;
  }

  addPoints(points: number): void {
    this.totalPoints += points;
  }

  pushMovieToHistory(movie: MovieInfo): void {
    console.log('movie Pushed: ', movie);
    this.movieHistory.push(movie);
    console.log('movie History: ', this.movieHistory);
  }

  resetGame(): void {
    this.totalPoints = 0;
    this.actualRound = 1;
    this.movieHistory = [];
  }
}
