import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {HttpClient} from "@angular/common/http";

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
  selector: 'p-projects',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush -> need cdRef.detectChanges()
})
export class ProjectsComponent implements OnInit {
  projects: ProjectItem[] = []
  precomputedIntervalString = new Map<ProjectItem, string>()

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<ProjectItem[]>('/data/projects.json').subscribe(projects => {
      projects.forEach(project => {
        this.precomputedIntervalString.set(project, this.processInterval(project.interval));
      })
      this.projects = projects;
    });
  }

  processInterval(interval: Interval): string {
    const {start, end, ignoreDay} = interval;
    console.log(this.precomputedIntervalString)

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

    return `FROM ${startFormatted} TO ${endFormatted}`;
  }
}
