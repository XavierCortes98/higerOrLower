import { Component } from '@angular/core';
// import { GameComponent } from './components/game/game.component';
import { GameComponent } from '../../components/game/game.component';
import { SortComponent } from '../sort/sort.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { tabs } from '../../models/gameTabs.enum';
@Component({
  selector: 'app-home',
  imports: [GameComponent, SortComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public tabs = tabs;
  currentTab: tabs = tabs.HOME;

  menuResponse(tabSelected: tabs) {
    this.currentTab = tabSelected;
  }
}
