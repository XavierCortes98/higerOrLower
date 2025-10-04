import { Component, EventEmitter, Output } from '@angular/core';
import { tabs } from '../../models/gameTabs.enum';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Output() gameMode = new EventEmitter<tabs>();

  tabs = tabs;

  selectGamemode(mode: tabs) {
    this.gameMode.emit(mode);
  }
}
