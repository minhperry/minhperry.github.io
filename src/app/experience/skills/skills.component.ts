import { Component } from '@angular/core';
import {LevelComponent} from "./level/level.component";

@Component({
  selector: 'p-skills',
  imports: [
    LevelComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
