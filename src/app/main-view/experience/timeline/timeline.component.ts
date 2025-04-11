import {Component, Input} from '@angular/core';
import {TimelineEvent} from "../../../../interfaces/date-entry";
import {HttpClient} from "@angular/common/http";
import {injectQuery} from '@tanstack/angular-query-experimental';
import {lastValueFrom} from 'rxjs';
import {Timeline} from 'primeng/timeline';
import {NgStyle} from '@angular/common';
import {FailedComponent} from '../../../misc/failed/failed.component';
import {LoadingComponent} from '../../../misc/loading/loading.component';

@Component({
  selector: 'pp-timeline',
  imports: [
    Timeline,
    NgStyle,
    FailedComponent,
    LoadingComponent
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input({required: true}) timelineDataFile!: string;
  @Input({required: true}) title = '';

  constructor(private http: HttpClient) {}

  readonly timeline = injectQuery(() => ({
      enabled: this.timelineDataFile !== '',
      queryKey: ['timeline', this.timelineDataFile],
      queryFn: () =>lastValueFrom(
        this.http.get<TimelineEvent[]>(this.timelineDataFile)
      )
    })
  )

  appendDate(event: TimelineEvent) {
    return `${event.start} - ${event.end ?? 'PRESENT'}`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  castToTimelineEvent = (event: any) => {
    return event as TimelineEvent;
  }
}
