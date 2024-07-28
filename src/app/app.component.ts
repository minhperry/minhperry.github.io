import { Component } from '@angular/core';
import { trigger, transition, animate, style, query } from '@angular/animations';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('1000ms ease-in-out', style({ opacity: 1 })),
      ]),
    ])
  ]
})
export class AppComponent {
  constructor(private _router: Router) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  hasRoute(routes: string[]) { 
    for (let route of routes) {
      if (this._router.url.includes(route)) {
        return true;
      }
    }
    return false;
  }
}
