import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'terminal',
  templateUrl: './terminal.component.html',
  styleUrl: './terminal.component.css'
})
export class TerminalComponent implements OnInit{
  @Input() config: any;
  grid: any[][] = [];

  ngOnInit(): void {
      this.grid = this.initGrid();
  }

  initGrid(): any[][] {
    for (let i = 1; i <= this.config.height; i++) {
      let row = [];
      for (let j = 1; j <= this.config.width; j++) {
        row.push({ x: j, y: i, value: '' });
      }
      this.grid.push(row);
    }
    return this.grid;
  }
  
  onCellClick(i: number, j: number) {
    console.log(i, j);
  }
}
