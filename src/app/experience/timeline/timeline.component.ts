import {Component, Input} from '@angular/core';
import {TimelineEvent} from "../../../interfaces/date-entry";

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input() timeline: TimelineEvent[] = [];
  @Input() title: string = '';

  constructor() {
    this.timeline = this.timeline.sort(
      (a, b) => a.id > b.id ? 1 : -1
    );
  }

  appendDate(event: TimelineEvent) {
    return `${event.start} - ${event.end ?? 'unbekannt'}`;
  }

  protected readonly Array = Array;
}
