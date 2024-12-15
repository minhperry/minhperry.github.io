import {Component, Input} from '@angular/core';

@Component({
  selector: 'level',
  imports: [],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss'
})
export class LevelComponent {
  @Input() name: string = '';
  @Input() level: number = 0;
}


// TODO: Migrate @Input to input signals https://angular.dev/reference/migrations/signal-inputs