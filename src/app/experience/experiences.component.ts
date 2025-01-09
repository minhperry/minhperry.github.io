import {Component} from '@angular/core';
import {TimelineComponent} from "./timeline/timeline.component";
import {OtherComponent} from "../other/other.component";

@Component({
  selector: 'p-experiences',
  templateUrl: './experiences.component.html',
  imports: [
    TimelineComponent,
    OtherComponent
  ],
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {


}
