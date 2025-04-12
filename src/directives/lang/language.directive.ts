import {Directive, OnInit} from '@angular/core';
import {LevelComponent} from "../../app/main-view/skills/level/level.component";

@Directive({
  selector: '[ppLang]'
})
export class LanguageDirective implements OnInit {

  constructor(private host: LevelComponent) { }

  ngOnInit() {
    this.host.isLang = true;
  }
}
