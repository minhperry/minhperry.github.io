import {Component, Input, OnInit} from '@angular/core';
import {TimelineEvent} from "../../../../interfaces/date-entry";
import {HttpClient} from "@angular/common/http";
import {injectQuery} from '@tanstack/angular-query-experimental';
import {lastValueFrom} from 'rxjs';
import {Timeline} from 'primeng/timeline';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'pp-timeline',
  imports: [
    Timeline,
    NgStyle
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit{
  @Input({required: true}) timelineDataFile!: string;
  @Input({required: true}) title = '';

  timeline__: TimelineEvent[] = [];
  isLoaded = false;

  constructor(private http: HttpClient) {}

  readonly timeline = injectQuery(() => ({
      enabled: this.timelineDataFile !== '',
      queryKey: ['timeline', this.timelineDataFile],
      queryFn: () =>lastValueFrom(
        this.http.get<TimelineEvent[]>(this.timelineDataFile)
      )
    })
  )

  ngOnInit() {
    this.http.get<TimelineEvent[]>(this.timelineDataFile).subscribe(data => {
      this.timeline__ = data;
    });
    this.isLoaded = true;
  }

  appendDate(event: TimelineEvent) {
    return `${event.start} - ${event.end ?? 'PRESENT'}`;
  }

  protected readonly Array = Array;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  castToTimelineEvent = (event: any) => {
    return event as TimelineEvent;
  }
}
