import { Component } from '@angular/core';
// import { GameComponent } from './components/game/game.component';
import { GameComponent } from '../../components/game/game.component';
@Component({
  selector: 'app-home',
  imports: [GameComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  currentTab: 'game' | 'ranking' | 'stats' = 'game';
}
