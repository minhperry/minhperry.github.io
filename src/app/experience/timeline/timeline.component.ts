import {Component, Input, OnInit} from '@angular/core';
import {TimelineEvent} from "../../../interfaces/date-entry";
import {HttpClient} from "@angular/common/http";
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'p-timeline',
  imports: [
    TranslatePipe
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit{
  @Input({required: true}) timelineDataFile!: string;
  @Input({required: true}) title = '';

  timeline: TimelineEvent[] = [];
  isLoaded = false;

  constructor(private http: HttpClient, private trans: TranslateService) {}

  ngOnInit() {
    this.http.get<TimelineEvent[]>(this.timelineDataFile).subscribe(data => {
      this.timeline = data;
    });
    this.isLoaded = true;
  }

  appendDate(event: TimelineEvent) {
    return `${this.translate('from')} ${event.start} ${this.translate('to')} ${event.end ?? this.translate('present') }`;
  }

  private translations: Record<string, Record<string, string>> = {
    from: { de: 'VON', en: 'FROM', vi: 'TỪ' },
    to: { de: 'BIS', en: 'TO', vi: 'ĐẾN' },
    present: { de: 'GEGENWÄRTIG', en: 'PRESENT', vi: 'HIỆN TẠI' }
  };

  private translate= (key: 'from' | 'to' | 'present') => {
    return this.translations[key][this.trans.currentLang] || this.translations[key]['en'];
  };

  protected readonly Array = Array;
}
