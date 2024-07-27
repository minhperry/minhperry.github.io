import { Component, OnInit, Input, Inject, Output } from '@angular/core';

enum CellState {
  ON = 'green', OFF = 'red'
}

@Component({
  selector: 'terminal',
  templateUrl: './pane.component.html',
  styleUrl: './pane.component.css'
})
export class PaneComponent {
  grid: CellState[][];
  width = 7
  height = 3
  chance = 0.2
  @Output() isAllOn = false;
  @Output() started = false;

  constructor() {
    this.grid = Array.from({ length: this.height }, () => new Array(this.width).fill(CellState.OFF));
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (Math.random() < this.chance) {
          this.grid[row][col] = CellState.ON; 
        }
      }
    }
  }

  onCellClick(row: number, col: number) {
    this.started = true;
    this.grid[row][col] = this.grid[row][col] === CellState.ON ? CellState.OFF : CellState.ON;
    this.checkAllOn();
  } 

  checkAllOn() {
    this.isAllOn = this.grid.every(row => row.every(cell => cell === CellState.ON));
  }
}
