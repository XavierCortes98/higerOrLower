import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EndGameComponent } from './pages/end-game/end-game.component';
import { SortComponent } from './pages/sort/sort.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'endgame', component: EndGameComponent },
  { path: 'sort-game', component: SortComponent },
  { path: '**', redirectTo: '' },
];
