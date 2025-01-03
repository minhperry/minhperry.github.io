import {Component} from '@angular/core';
import {AdaptiveHeightDirective} from "../../directives/height/adaptive-height.directive";

@Component({
  selector: 'p-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  imports: [
    AdaptiveHeightDirective
  ]
})
export class LandingComponent {

}
