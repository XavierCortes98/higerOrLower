import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameManagerService {
  totalPoints: number = 0;
  actualRound: number = 1;

  constructor() {}

  get getTotalPoints(): number {
    return this.totalPoints;
  }

  get getActualRound(): number {
    return this.actualRound;
  }

  addRound(): void {
    this.actualRound += 1;
  }

  addPoints(points: number): void {
    this.totalPoints += points;
  }
}
