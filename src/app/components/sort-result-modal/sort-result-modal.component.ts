import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MovieInfo } from '../../models/movieInfo.model';

@Component({
  selector: 'app-sort-result-modal',
  imports: [MatDialogModule, MatIconModule, CommonModule],
  standalone: true,
  templateUrl: './sort-result-modal.component.html',
  styleUrl: './sort-result-modal.component.scss',
})
export class SortResultModalComponent implements OnInit {
  results: boolean[] = [];
  correctOrder: MovieInfo[] = [];
  correctCount: number = 0;
  constructor(
    public dialogRef: MatDialogRef<SortResultModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.results = this.data.results;
    this.correctOrder = this.data.correctOrder;
    this.correctCount = this.results.filter((res) => res).length;
  }

  home(): void {
    this.dialogRef.close('home');
  }

  playAgain(): void {
    this.dialogRef.close('play-again');
  }
}
