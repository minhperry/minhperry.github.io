import {Component, Input, OnInit} from '@angular/core';
import {TimelineEvent} from "../../../interfaces/date-entry";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'p-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit{
  @Input({required: true}) timelineDataFile!: string;
  @Input({required: true}) title = '';

  timeline: TimelineEvent[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<TimelineEvent[]>(this.timelineDataFile).subscribe(data => {
      this.timeline = data;
    });
  }

  appendDate(event: TimelineEvent) {
    return `${event.start} ➜ ${event.end ?? 'present'}`;
  }

  protected readonly Array = Array;
}
