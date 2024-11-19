import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { RouterOutlet, Router } from '@angular/router';

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [
        trigger('routeAnimations', [
            transition('* <=> *', [
                style({ opacity: 0 }),
                animate('1000ms ease-in-out', style({ opacity: 1 })),
            ]),
        ])
    ],
    standalone: false
})
export class AppComponent {
  publicMode: boolean | null = null;

  constructor(private _router: Router) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
