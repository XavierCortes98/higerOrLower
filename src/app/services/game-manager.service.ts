import { Injectable } from '@angular/core';
import { MovieInfo } from '../models/movieInfo.model';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  totalPoints: number = 0;
  actualRound: number = 1;

  limitOfRound = 2;
  maxPointsPerRound = 1000;

  movieHistory: MovieInfo[] = [];

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

  get getMaxPointsPerRoundValue(): number {
    return this.maxPointsPerRound;
  }

  get getLimitOfRoundValue(): number {
    return this.limitOfRound;
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
