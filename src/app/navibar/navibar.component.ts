import {ApplicationRef, ChangeDetectorRef, Component, Inject, PLATFORM_ID} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {environment} from "../../environments/environment";
import {Utils} from "../../services/utils/utils.service";
import {MatTooltip} from "@angular/material/tooltip";

interface NavLink {
  path: string,
  label: string
}

interface ExternalLink {
  link: string,
  label: string
}

@Component({
  selector: 'p-navbar',
  templateUrl: './navibar.component.html',
  styleUrl: './navibar.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatTooltip
  ]
})
export class NavibarComponent {
  navLinks: NavLink[] = [
    {path: '/projects', label: 'Projects'},
    {path: '/skills', label: 'Skills'},
    {path: '/experiences', label: 'Exp & Edu'},
    {path: '/socials', label: 'Socials'},
  ];

  extLinks: ExternalLink[] = [
    {link: 'https://blog.minhperry.de/', label: 'Blog'},
    {link: 'https://every-color.minhperry.de', label: 'Every Color'},
    {link: 'https://status.minhperry.de', label: 'Status'},
  ]

  version = environment.version
  time = '';
  private colon = true;

  isStable = false;

  constructor(@Inject(PLATFORM_ID) private platform: object, private appRef: ApplicationRef, private cdRef: ChangeDetectorRef) {
    this.setCurrentTime(!this.colon);
    this.appRef.isStable.subscribe(stable => {
      if (stable && !this.isStable) {
        this.isStable = true;
        this.startClock();
      }
    })
  }

  startClock() {
    Utils.doIfBrowser(this.platform, () => {
      setInterval(() => {
        this.setCurrentTime(!this.colon);
        this.cdRef.detectChanges();
      }, 1000);
    })
  }

  private setCurrentTime(colon: boolean) {
    let date = new Date().toLocaleString("de-DE", {
      day: '2-digit', month: '2-digit', year: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    })
    date = date.replace(/,/g, '');
    let date2;
    if (colon) {
      date2 = date.replace(/:/, ' ');
    } else {
      let i = 0;
      date2 = date.replace(/:/g, match => ++i === 2 ? ' ' : match);
    }
    this.time = date2;
    this.colon = !this.colon;
  }
}
