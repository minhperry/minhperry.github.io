import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

interface PixivBackground {
  loc: string,
  id: string
}

@Component({
    selector: 'p-landing',
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss',
    imports: [NgStyle]
})
export class LandingComponent implements OnInit{
  pixivBase = 'https://www.pixiv.net/en/artworks/'
  private backgrounds: PixivBackground[] = [
    // { loc: 'backgrounds/1.jpg', id: '121465871'},
    { loc: 'backgrounds/2.jpg', id: '121402278'},
    { loc: 'backgrounds/3.jpg', id: '120856704'},
    { loc: 'backgrounds/4.jpg', id: '114034665'},
    { loc: 'backgrounds/5.jpg', id: '101967216'},
    { loc: 'backgrounds/6.jpg', id: '119088266'},
    { loc: 'backgrounds/7.jpg', id: '115829752'}
  ];
  private secret = { loc: 'backgrounds/secret.jpg', id: '113608935' };

  currentPixivID = '';
  currentBgUrl = '';

  ngOnInit(): void {
      this.setrRandomBG()
  }

  setrRandomBG() {
    if (Math.random() < 0.01) {
      this.currentBgUrl = this.secret.loc;
      this.currentPixivID = this.secret.id;
      return;
    }

    const randomIndex = Math.floor(Math.random() * this.backgrounds.length);
    this.currentBgUrl = this.backgrounds[randomIndex].loc;
    this.currentPixivID = this.backgrounds[randomIndex].id;
  }
}
