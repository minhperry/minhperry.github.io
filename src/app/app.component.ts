import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, query } from '@angular/animations';
import { RouterOutlet, Router } from '@angular/router';
import { PublicModeHandlerService } from '../services/http/public-mode-handler.service';

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
export class AppComponent implements OnInit {
  publicMode: boolean | null = null;

  constructor(private _router: Router, private phs: PublicModeHandlerService) {
  }

  ngOnInit(): void {
      this.phs.get().subscribe(mode => this.publicMode = mode)
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

  shouldShow() {
    return !this.hasRoute(['skyblock', 'changelog', '404']); 
  }
}
