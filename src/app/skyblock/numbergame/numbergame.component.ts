import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cell, CellState } from '../../../interfaces/cell';

@Component({
  selector: 'numbergame',
  templateUrl: './numbergame.component.html',
  styleUrl: './numbergame.component.css'
})
export class NumbergameComponent implements OnInit, OnDestroy {
  grid: Cell[][] = [];
  timer: number = 0;
  intervalId: any;
  started: boolean = false;

  next: number = 1;

  width = 7;
  height = 2;
  size = this.width * this.height;
  numberMap: Map<{ row: number, col: number }, number> = new Map();

  ngOnInit(): void {
      this.initializeGrid()
  }

  ngOnDestroy(): void {
      this.stopTimer()
  }

  private genGrid(): Cell[][] {
    const numbers = Array.from({ length: this.size }, (_, i) => i + 1);

    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    let grid$: Cell[][] = [];
    for (let i = 0; i < this.size; i++) {
      const row = Math.floor(i / this.width);
      const col = i % this.width;
      if (col === 0) {
        grid$.push([]);
      }
      grid$[row].push({ number: numbers[i], state: CellState.OFF });
      this.numberMap.set({ row, col }, numbers[i]);
    }
    console.log(this.numberMap);
    return grid$;
  }

  initializeGrid() {
    this.grid = this.genGrid();
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
    const clickedNumber = this.grid[row][col].number;

    // Check if the clicked cell number matches the next number to be clicked
    if (clickedNumber === this.next) {
      this.grid[row][col].state = CellState.ON;  // Mark the cell as 'ON'
      this.next += 1;  // Increment to the next number

      // Check if the game is completed
      if (this.next > this.size) {
        this.stopTimer();
      }
    }
  }
}
