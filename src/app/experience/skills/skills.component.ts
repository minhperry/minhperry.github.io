import { Component } from '@angular/core';
import {LevelComponent} from "./level/level.component";
import {LanguageDirective} from "../../../directives/lang/language.directive";

@Component({
  selector: 'skills',
  imports: [
    LevelComponent,
    LanguageDirective
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
