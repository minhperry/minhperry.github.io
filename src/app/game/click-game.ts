import { BaseGame } from "./base-game";

enum State {
    ON, OFF
}

export class ClickGame extends BaseGame<State> {

    percentage = 0.21

    constructor(width: number, height: number) {
        super(width, height);
    }

    override initGrid(): State[][] {
        let grid: State[][] = [];
        for (let i = 1; i <= this.height; i++) {
            let row = [];
            for (let j = 1; j <= this.width; j++) {
                row.push(Math.random() < this.percentage ? State.ON : State.OFF);
            }
            this.grid.push(row);
        }
        return grid;
    }

    override onCellClick(i: number, j: number): void {
        this.grid[i][j] = this.not(this.grid[i][j]);
    }

    override cellDecorator(i: number, j: number, cell: State): void {
        console.log("Hallo everynyan. How are you? I'm fine thank you. I wish I were a bird");
    }

    private not(state: State): State {
        return state === State.ON ? State.OFF : State.ON;
    }    
}
