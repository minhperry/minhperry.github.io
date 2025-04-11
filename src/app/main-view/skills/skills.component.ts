import {Component, OnInit} from '@angular/core';
import {LevelComponent} from "./level/level.component";
import {LanguageDirective} from "../../../directives/lang/language.directive";
import {SkillSection} from "../../../interfaces/skill-entry";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";

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
  showScore: boolean;

  constructor(private http: HttpClient, private ls: LocalStorageService) {
    this.showScore = this.ls.getItem('showScore') ?? false;
  }

  ngOnInit() {
    this.http.get<SkillSection[]>('/data/skills.json').subscribe(data => {
      this.skills = data.map(section => ({
        ...section,
        entries: section.entries.sort((a, b) => b.level - a.level)
      }))
    });
  }

  toggleScore() {
    this.showScore = !this.showScore;
    this.ls.setItem('showScore', this.showScore);
  }
}
