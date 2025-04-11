import {booleanAttribute, Component, Input, numberAttribute} from '@angular/core';
import {NgClass} from "@angular/common";
import {SkillsComponent} from "../skills.component";

@Component({
  selector: 'pp-level',
  imports: [
    NgClass
  ],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss'
})
export class LevelComponent {
  @Input() name!: string;
  @Input({transform: numberAttribute}) level!: number;
  @Input({transform: booleanAttribute}) will = false;
  @Input({transform: booleanAttribute}) showScore: boolean;
  isLang = false;

  constructor(host: SkillsComponent) {
    this.showScore = host.showScore;
  }

  languageLevel(l: number): string {
    return ['0', 'A1.1', 'A1.2', 'A2.1', 'A2.2', 'B1.1', 'B1.2', 'B2.1', 'B2.2', 'C1.1', 'C1.2', 'C2.1', 'C2.2'][l];
  }
}


// TODO: Migrate @Input to input signals https://angular.dev/reference/migrations/signal-inputs