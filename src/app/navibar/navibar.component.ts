import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {Tooltip} from 'primeng/tooltip';

@Component({
  selector: 'pp-navbar',
  templateUrl: './navibar.component.html',
  styleUrl: './navibar.component.scss',
  imports: [
    MenubarModule,
    RouterLink,
    NgOptimizedImage,
    Tooltip
  ],
})
export class NavibarComponent {
  version = environment.version

  logoSize = 30

  private activeOpt = {
    exact: true,
    styleClass: '!text-sky-100'
  }

  menuItems: MenuItem[] = [
    {
      label: 'Projects',
      icon: 'pi pi-fw pi-briefcase',
      routerLink: '/projects',
      routerLinkActiveOptions: this.activeOpt,
    },
    {
      label: 'Skills',
      icon: 'pi pi-fw pi-star',
      routerLink: '/skills',
      routerLinkActiveOptions: this.activeOpt,
    },
    {
      label: 'Experience',
      icon: 'pi pi-fw pi-calendar',
      routerLink: '/experiences',
      routerLinkActiveOptions: this.activeOpt,
    },
    {
      label: 'External',
      icon: 'pi pi-ellipsis-h',
      items: [
        {
          label: 'Blog',
          icon: 'pi pi-fw pi-book',
          url: 'https://blog.minhperry.de/'
        },
        {
          label: 'Every Color',
          icon: 'pi pi-fw pi-palette',
          url: 'https://every-color.minhperry.de'
        },
        {
          label: 'Status',
          icon: 'pi pi-fw pi-check-circle',
          url: 'https://status.minhperry.de'
        },
        {
          label: 'CV (latest)',
          icon: 'pi pi-fw pi-file-pdf',
          url: 'https://cdn.minhperry.de/pdf/lebenslauf-v2.pdf?access=thisisonlyavailableforrecruiters'
          // todo: fix this on server side that enforces the acccess parameter
        },
        {
          label: 'CV (old)',
          icon: 'pi pi-fw pi-file-pdf',
          url: 'https://cdn.minhperry.de/pdf/lebenslauf.pdf'
        }
      ]
    }
  ]
}
