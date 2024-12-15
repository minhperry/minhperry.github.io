import {booleanAttribute, Component, Input, numberAttribute} from '@angular/core';
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'level',
  imports: [
    MatTooltip
  ],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss'
})
export class LevelComponent {
  @Input() name!: string;
  @Input({transform: numberAttribute}) level!: number;
  @Input({transform: booleanAttribute}) will: boolean = false;
  @Input() description!: string;

  // (Self-)Extended Dreyfus model: https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition
  classifyLevel(l: number): string {
    if (0 <= l && l <= 10) {
      return 'Novice';
    } else if (10 < l && l <= 25) {
      return 'Beginner';
    } else if (25 < l && l <= 48) {
      return 'Advanced Beginner';
    } else if (48 < l && l <= 64) {
      return 'Competent';
    } else if (64 < l && l <= 85) {
      return 'Proficient';
    } else if (85 < l && l <= 100) {
      return 'Expert';
    } else return '';
  }

  protected readonly Array = Array;
}


// TODO: Migrate @Input to input signals https://angular.dev/reference/migrations/signal-inputs