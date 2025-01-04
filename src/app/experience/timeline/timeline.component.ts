import {Component, Input} from '@angular/core';
import {TimelineEvent} from "../../../interfaces/date-entry";

@Component({
  selector: 'p-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input({required: true}) timeline!: TimelineEvent[];
  @Input({required: true}) title = '';

  appendDate(event: TimelineEvent) {
    return `${event.start} ➜ ${event.end ?? 'present'}`;
  }

  protected readonly Array = Array;
}
