import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{
  private backgrounds: string[] = [
    'https://www.bucuti.com/storage/app/media/screensavers/dining-desktop.jpg',
    'https://www.bucuti.com/storage/app/media/screensavers/sunset1-desktop.jpg',
    'https://i.pinimg.com/originals/b7/f3/78/b7f378175ffba39680f53419dfb8d40f.jpg',
    'https://pics.freeartbackgrounds.com/Night_Beach_Restauran_Background-1007.jpg'
  ];

  ngOnInit(): void {
      this.setrRandomBG()
  }

  setrRandomBG() {
    const randomIndex = Math.floor(Math.random() * this.backgrounds.length);
    const selectedBackground = this.backgrounds[randomIndex];
    document.querySelector('.landing-container')!.setAttribute('style', `background-image: url(${selectedBackground});`);
  }
}
