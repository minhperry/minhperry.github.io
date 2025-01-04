import {AfterViewInit, Component, HostListener, OnDestroy, OnInit,} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {environment} from "../../environments/environment";
import {MatTooltip} from "@angular/material/tooltip";
import {animate, state, style, transition, trigger} from "@angular/animations";

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
  ],
  animations: [
    trigger('slideToggle', [
      state('true', style({
        height: '*',
      })),
      state('false', style({
        height: '0',
      })),
      transition('true <=> false', animate('250ms cubic-bezier(0.4, 0, 0.2, 1)'))
    ])
  ]
})
export class NavibarComponent implements OnInit, OnDestroy, AfterViewInit {
  navLinks: NavLink[] = [
    {path: '/projects', label: 'Projects'},
    {path: '/skills', label: 'Skills'},
    {path: '/experiences', label: 'Exp & Edu'}
  ];

  extLinks: ExternalLink[] = [
    {link: 'https://blog.minhperry.de/', label: 'Blog'},
    {link: 'https://every-color.minhperry.de', label: 'Every Color'},
    {link: 'https://status.minhperry.de', label: 'Status'},
  ]

  version = environment.version
  time = '';
  isOpen: boolean | null = null;
  private colon = true;
  private resizeListener!: () => void;

  constructor() {
    this.setCurrentTime(!this.colon);
    this.startClock();
    if (window.innerWidth < 768) {
      this.isOpen = false;
    }
  }

  ngOnInit(): void {
    this.onResize()

    this.resizeListener = () => this.onResize();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  ngAfterViewInit() {
    if (this.isOpen) {
      this.onResize();
    }
  }

  startClock() {
    setInterval(() => {
      this.setCurrentTime(!this.colon);
    }, 1000);
  }

  openClose() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('window:resize')
  onResize() {
    this.isOpen = window.innerWidth >= 768;
  }

  private setCurrentTime(colon: boolean) {
    let date = new Date().toLocaleString("de-DE", {
      day: '2-digit', month: '2-digit', year: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    })
    date = date.replace(/,/g, '');
    let formattedDate;
    if (colon) {
      formattedDate = date.replace(/:/, ' ');
    } else {
      let i = 0;
      formattedDate = date.replace(/:/g, match => ++i === 2 ? ' ' : match);
    }
    this.time = formattedDate;
    this.colon = !this.colon;
  }
}
