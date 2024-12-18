import {Component, OnInit} from '@angular/core';
import {TimelineEvent} from "../../interfaces/date-entry";
import {TimelineComponent} from "./timeline/timeline.component";
import {HttpClient} from "@angular/common/http";
import {SkillsComponent} from "./skills/skills.component";

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  imports: [
    TimelineComponent,
    SkillsComponent
  ],
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent implements OnInit {

  protected jobExperience: TimelineEvent[] = []
  protected projects: TimelineEvent[] = []
  protected education: TimelineEvent[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<TimelineEvent[]>('data/jobs.json').subscribe(data => {
      this.jobExperience = data;
    });
    this.http.get<TimelineEvent[]>('data/projects.json').subscribe(data => {
      this.projects = data;
    });
    this.http.get<TimelineEvent[]>('data/edu.json').subscribe(data => {
      this.education = data;
    });
  }


}
