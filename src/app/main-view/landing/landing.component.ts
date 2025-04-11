import {Component} from '@angular/core';
import {AdaptiveHeightDirective} from "../../../directives/height/adaptive-height.directive";
import {TextRotatorComponent} from "../../misc/text-rotator/text-rotator.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'pp-landing',
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

  socials: { url: string, riIcon: string }[] = [
    {url: 'https://github.com/minhperry', riIcon: 'ri-github-fill'},
    {url: 'https://gitlab.com/minhperry', riIcon: 'ri-gitlab-fill'},
    {url: 'https://linkedin.com/in/ptm2002', riIcon: 'ri-linkedin-fill'},
    {url: 'https://twitter.com/___727__', riIcon: 'ri-twitter-fill'},
    {url: 'mailto:me@minhperry.de', riIcon: 'ri-mail-fill'},
    {url: '/pdf/lebenslauf.pdf', riIcon: 'ri-file-text-fill'},
    {url: 'https://www.youtube.com/@minhperry', riIcon: 'ri-youtube-fill'},
  ]
}

// That's it im fucking disabling SSR, this shit cause more harm than good.
// https://www.reddit.com/r/Angular2/comments/1apc511/how_can_i_turn_off_ssr_in_angular_17/