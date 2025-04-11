import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {injectQuery} from '@tanstack/angular-query-experimental';
import {lastValueFrom} from 'rxjs';
import {DataView} from 'primeng/dataview';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {ProgressSpinner} from 'primeng/progressspinner';
import {FailedComponent} from '../../misc/failed/failed.component';
import {LoadingComponent} from '../../misc/loading/loading.component';

interface Interval {
  start: string,
  end?: string
  ignoreDay: boolean
}

interface ProjectItem {
  title: string,
  description: string[] | string,
  interval: Interval,
  image?: string,
  source?: string,
  view?: string
}

@Component({
  selector: 'pp-projects',
  imports: [
    DataView,
    NgClass,
    NgOptimizedImage,
    FailedComponent,
    LoadingComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush //-> need cdRef.detectChanges()
})
export class ProjectsComponent {
  constructor(private http: HttpClient) {
  }

  readonly projects = injectQuery( () => ({
      queryKey: ['projects'],
      queryFn: () => lastValueFrom(
        this.http.get<ProjectItem[]>('/data/projects.json')
      ),
    }),
  )

  processInterval(interval: Interval, mobileLayout = false): string {
    const {start, end, ignoreDay} = interval;

    const parseDate = (dateString: string): Date => {
      const [day, month, year] = dateString.split('.').map(Number);
      return new Date(year, month - 1, day); // Month is 0-based in JavaScript
    };

    const monthNames = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
    ];

    const formatDate = (date: string, ignoreDay: boolean): string => {
      const parsedDate = parseDate(date); // Manually parse the date

      if (ignoreDay) {
        const month = monthNames[parsedDate.getMonth()]; // Get the month abbreviation in uppercase
        const year = parsedDate.getFullYear();
        return `${month} ${year}`; // Return the month abbreviation and year
      }

      return parsedDate.toLocaleDateString('de-DE');
    };

    const startFormatted = formatDate(start, ignoreDay);
    const endFormatted = end ? formatDate(end, ignoreDay) : 'PRESENT';

    if (!mobileLayout) return `FROM ${startFormatted} TO ${endFormatted}`;
    else return `${startFormatted} - ${endFormatted}`;
  }
}
