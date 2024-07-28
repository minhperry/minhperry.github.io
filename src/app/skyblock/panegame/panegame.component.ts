import { Component, OnDestroy, OnInit } from '@angular/core';

export enum CellState {
  ON = 'green', OFF = 'red'
}

@Component({
  selector: 'panegame',
  templateUrl: './panegame.component.html',
  styleUrl: './panegame.component.css'
})
export class PaneGameComponent implements OnInit, OnDestroy {
  grid: CellState[][] = [];
  timer: number = 0;
  intervalId: any;
  started: boolean = false;

  width = 7;
  height = 3;
  chance = 0.2;

  ngOnInit(): void {
      this.initializeGrid()
  }

  ngOnDestroy(): void {
      this.stopTimer()
  }

  private genRandomOn(grid: CellState[][]): CellState[][] {
    const totalCells = this.width * this.height;
    const totalOnCells = Math.floor(this.chance * totalCells);
    let onCellsRemaining = totalOnCells;

    while (onCellsRemaining > 0) {
      const row = Math.floor(Math.random() * this.height);
      const col = Math.floor(Math.random() * this.width);

      if (this.grid[row][col] === CellState.OFF) {
        this.grid[row][col] = CellState.ON;
        onCellsRemaining--;
      }
    }
    return grid;
  }

  initializeGrid() {
    this.grid = Array.from({ length: this.height }, () => 
      Array.from({ length: this.width }, () => CellState.OFF)
    );
    this.grid = this.genRandomOn(this.grid);
  }

  startTimer() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.timer += 0.1;
      }, 100);
    }
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  onRestartButtonClick() {
    this.stopTimer();
    this.timer = 0;
    this.started = false;
    this.initializeGrid();
  }

  onCellClicked(cell: { row: number, col: number }) {
    if (!this.started) {
      this.started = true;
      this.startTimer();
    }

    const { row, col } = cell;
    this.grid[row][col] = this.grid[row][col] === CellState.ON ? CellState.OFF : CellState.ON;

    if (this.checkAllOn()) {
      this.stopTimer();
    }
  }

  private checkAllOn(): boolean { 
    return this.grid.every(row => row.every(cell => cell === CellState.ON));
  }
}
