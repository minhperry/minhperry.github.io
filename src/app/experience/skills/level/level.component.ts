import {booleanAttribute, Component, Input, numberAttribute} from '@angular/core';
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'p-level',
  imports: [
    MatTooltip
  ],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss'
})
export class LevelComponent {
  @Input() name!: string;
  @Input({transform: numberAttribute}) level!: number;
  @Input({transform: booleanAttribute}) will = false;

  isLang = false;

  // (Self-)Extended Dreyfus model: https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition
  classifyLevel(l: number): string {
    if (0 <= l && l <= 10) {
      return 'Novice';
    } else if (10 < l && l <= 25) {
      return 'Beginner';
    } else if (25 < l && l <= 48) {
      return 'Intermediate';
    } else if (48 < l && l <= 64) {
      return 'Competent';
    } else if (64 < l && l <= 90) {
      return 'Proficient';
    } else if (90 < l && l <= 100) {
      return 'Expert';
    } else return '';
  }

  // 1 -> A1.1, 12 -> C2.2
  languageLevel(l: number): string {
    return ['0', 'A1.1', 'A1.2', 'A2.1', 'A2.2', 'B1.1', 'B1.2', 'B2.1', 'B2.2', 'C1.1', 'C1.2', 'C2.1', 'C2.2'][l];
  }
}


// TODO: Migrate @Input to input signals https://angular.dev/reference/migrations/signal-inputs