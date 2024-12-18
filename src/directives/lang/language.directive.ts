import {Directive, OnInit} from '@angular/core';
import {LevelComponent} from "../../app/experience/skills/level/level.component";

@Directive({
  selector: '[language]'
})
export class LanguageDirective implements OnInit {

  constructor(private host: LevelComponent) { }

  ngOnInit() {
    this.host.isLang = true;
  }
}
