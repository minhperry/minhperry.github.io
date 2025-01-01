import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {environment} from "../../environments/environment";
import {Utils} from "../../services/utils/utils.service";
import {MatTooltip} from "@angular/material/tooltip";
interface NavLink {
  path: string;
  label: string;
  isExternal?: boolean;
}

@Component({
  selector: 'p-navibar',
  templateUrl: './navibar.component.html',
  styleUrl: './navibar.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatTooltip
  ]
})
export class NavibarComponent implements OnInit{
  naviLinks: NavLink[] = [
    {path: '/', label: 'Home'},
    {path: '/projects', label: 'Projects'},
    {path: '/skills', label: 'Skills'},
    {path: '/experiences', label: 'Exp-n-Edu'},
    {path: '/socials', label: 'Socials'},
    {path: 'https://blog.minhperry.de/', label: 'Blog', isExternal: true},
  ];

  version = environment.version
  time = '';
  private colon = true;

  constructor(@Inject(PLATFORM_ID) private platform: object) {
    this.updateDate(!this.colon);
  }

  ngOnInit() {
    Utils.doIfBrowser(this.platform, () => {
      setInterval(() => {
        this.updateDate(!this.colon);
      }, 1000);
    })
  }

  private updateDate(colon: boolean) {
    let date = new Date().toLocaleString("de-DE", {
      day: '2-digit', month: '2-digit', year: 'numeric',
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
