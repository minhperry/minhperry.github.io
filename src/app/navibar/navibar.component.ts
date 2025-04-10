import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {MatTooltip} from "@angular/material/tooltip";
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'pp-navbar',
  templateUrl: './navibar.component.html',
  styleUrl: './navibar.component.scss',
  imports: [
    MatTooltip,
    MenubarModule,
    RouterLink,
    NgOptimizedImage
  ],
})
export class NavibarComponent {
  version = environment.version

  logoSize = 30

  menuItems: MenuItem[] = [
    {
      label: 'Projects',
      icon: 'pi pi-fw pi-briefcase',
      routerLink: '/projects'
    },
    {
      label: 'Skills',
      icon: 'pi pi-fw pi-star',
      routerLink: '/skills'
    },
    {
      label: 'Experience',
      icon: 'pi pi-fw pi-calendar',
      routerLink: '/experiences'
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
          label: 'CV',
          icon: 'pi pi-fw pi-file-pdf',
          url: 'https://cdn.minhperry.de/pdf/lebenslauf-v2.pdf?access=thisisonlyavailableforrecruiters'
          // todo: fix this on server side that enforces the acccess parameter
        }
      ]
    }
  ]
}
