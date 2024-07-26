import { Component } from '@angular/core';
import { trigger, transition, animate, style, query } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
