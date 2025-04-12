import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavibarComponent} from "./navibar/navibar.component";
import {FooterComponent} from "./footer/footer.component";
import {swipe} from './animation/swipe';
import {NgClass} from '@angular/common';

@Component({
  selector: 'pp-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavibarComponent, RouterOutlet, FooterComponent, NgClass],
  animations: [
    swipe
  ]
})
export class AppComponent {
  constructor(private router: Router) {
  }

  isNotOnRoot(): boolean {
    const excluded = ['/']
    return !excluded.includes(this.router.url);
  }

  getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
