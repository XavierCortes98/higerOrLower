import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MoviesService } from '../../services/movies-service.service';
import { MovieInfo } from '../../models/movieInfo.model';
import { SortCardComponent } from '../../components/sort-card/sort-card.component';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SortResultModalComponent } from '../../components/sort-result-modal/sort-result-modal.component';
import { tabs } from '../../models/gameTabs.enum';

@Component({
  selector: 'app-sort',
  imports: [SortCardComponent, DragDropModule, MatDialogModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
  providers: [MoviesService],
})
export class SortComponent implements OnInit {
  @Output() gameMode = new EventEmitter<tabs>();

  moviesToSort: MovieInfo[] = [];
  correctOrder: MovieInfo[] = [];
  result: boolean[] = [];

  constructor(private movieService: MoviesService, private dialog: MatDialog) {}

  ngOnInit() {
    this.newGame();
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.moviesToSort, event.previousIndex, event.currentIndex);
  }

  checkResult() {
    this.result = this.moviesToSort.map(
      (movie, index) => movie.id === this.correctOrder[index].id
    );
    console.log(this.result);
  }

  newGame() {
    this.movieService.getMovieList().subscribe((movieList) => {
      this.correctOrder = [...movieList];
      this.correctOrder.sort((a, b) => b.vote_average - a.vote_average);

      this.moviesToSort = [...movieList];
      this.moviesToSort.sort(() => Math.random() - 0.5);
    });
  }

  openModal() {
    this.checkResult();

    const dialogRef = this.dialog.open(SortResultModalComponent, {
      width: '400px',
      disableClose: true,
      data: { results: this.result, correctOrder: this.correctOrder },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res === 'home') {
        this.gameMode.emit(tabs.HOME);
      } else if (res === 'play-again') {
        this.newGame();
        this.result = [];
      }
    });
  }
}
