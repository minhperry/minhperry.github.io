import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {HttpClient} from "@angular/common/http";

interface Interval {
  start: Date,
  end?: Date
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
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  projects: ProjectItem[] = []
  i = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<ProjectItem[]>('/data/projects.json').subscribe(projects => {
      this.projects = projects;
    });
  }

  processInterval(interval: Interval): string {
    const { start, end, ignoreDay } = interval;
    this.i++;
    console.log(start, end, ignoreDay);

    const formatDate = (date: Date, ignoreDay: boolean): string => {
      if (ignoreDay) {
        return date.toLocaleString('de-DE', { month: 'short', year: 'numeric' });
      }
      return new Date(date).toLocaleDateString('de-DE');
    };

    const startFormatted = formatDate(start, ignoreDay);
    const endFormatted = end ? formatDate(end, ignoreDay) : 'PRESENT';

    return `FROM ${startFormatted} TO ${endFormatted}`;
  }
}
