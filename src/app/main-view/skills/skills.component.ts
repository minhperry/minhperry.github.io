import {Component} from '@angular/core';
import {LevelComponent} from './level/level.component';
import {LanguageDirective} from '../../../directives/lang/language.directive';
import {SkillSection} from '../../../interfaces/skill-entry';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../../../services/local-storage/local-storage.service';
import {ToggleSwitch} from 'primeng/toggleswitch';
import {FormsModule} from '@angular/forms';
import {injectQuery} from '@tanstack/angular-query-experimental';
import {lastValueFrom} from 'rxjs';
import {LoadingComponent} from '../../misc/loading/loading.component';
import {FailedComponent} from '../../misc/failed/failed.component';

@Component({
  selector: 'pp-skills',
  imports: [
    LevelComponent,
    LanguageDirective,
    ToggleSwitch,
    FormsModule,
    LoadingComponent,
    FailedComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  showScore: boolean;

  constructor(private http: HttpClient, private ls: LocalStorageService) {
    this.showScore = this.ls.getItem('showScore') ?? false;
  }

  readonly $skills = injectQuery(() => ({
    queryKey: ['skills'],
    queryFn: async () => {
      const dataObs = this.http.get<SkillSection[]>('data/skills.json');
      const dataPrm = lastValueFrom(dataObs);
      const data = await dataPrm

      return data.map(section => ({
        ...section,
        entries: section.entries.sort((a, b) => b.level - a.level)
      }))
    },
  }))
}
