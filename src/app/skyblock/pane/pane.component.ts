import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CellState } from '../panegame/panegame.component';

@Component({
  selector: 'pane',
  templateUrl: './pane.component.html',
  styleUrl: './pane.component.css'
})
export class PaneComponent {
  @Input() grid: CellState[][] = [];
  @Output() cellClicked = new EventEmitter<{ row: number, col: number }>();

  handleCellClick(row: number, col: number) {
    this.cellClicked.emit({ row, col });
  }
}
