import {Component} from '@angular/core';
import {AdaptiveHeightDirective} from "../../directives/height/adaptive-height.directive";
import {TextRotatorComponent} from "../text-rotator/text-rotator.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'p-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  imports: [
    AdaptiveHeightDirective,
    TextRotatorComponent,
    FormsModule,
  ]
})
export class LandingComponent {
  textArray = [
    'developer', 'student', 'semi-designer', 'rhythm gamer',
    'tech enthusiast', 'OSS contributor', 'frontend engineer',
    'Angular advocate', 'creative thinker', 'Tailwind enjoyer',
    'continuous learner', 'team player', 'solution finder'
  ]

  textStayDuration = 2000;
  textFadeDuration = 500;
  textRotationMode: 'sequential' | 'random' = 'random';
}

// That's it im fucking disabling SSR, this shit cause more harm than good.
// https://www.reddit.com/r/Angular2/comments/1apc511/how_can_i_turn_off_ssr_in_angular_17/