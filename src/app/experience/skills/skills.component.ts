import {Component, OnInit} from '@angular/core';
import {LevelComponent} from "./level/level.component";
import {LanguageDirective} from "../../../directives/lang/language.directive";
import {SkillSection} from "../../../interfaces/skill-entry";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'p-skills',
  imports: [
    LevelComponent,
    LanguageDirective
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit{
  protected skills: SkillSection[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<SkillSection[]>('/data/skills.json').subscribe(data => {
      this.skills = data.map(section => ({
        ...section,
        entries: section.entries.sort((a, b) => b.level - a.level)
      }))
    });
  }
}
