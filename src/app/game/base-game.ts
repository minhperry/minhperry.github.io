export abstract class BaseGame<T> {
    grid: T[][];
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.grid = this.initGrid();
    }

    abstract initGrid(): T[][];

    abstract onCellClick(i: number, j: number): void;

    abstract cellDecorator(i: number, j: number, cell: T): void;
}
