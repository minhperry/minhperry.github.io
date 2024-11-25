import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { RouterOutlet, Router } from '@angular/router';
import {NavibarComponent} from "./navibar/navibar.component";

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NavibarComponent, RouterOutlet]
})
export class AppComponent {
  publicMode: boolean | null = null;

  constructor(private _router: Router) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
