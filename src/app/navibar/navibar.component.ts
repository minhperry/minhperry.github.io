import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock/clock.service';

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'navibar',
  templateUrl: './navibar.component.html',
  styleUrl: './navibar.component.css',
})
export class NavibarComponent implements OnInit {
  naviLinks: NavLink[] = [
    { path: '/', label: 'Home' },
    { path: '/me', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/socials', label: 'Socials' },
    { path: '/fun', label: 'Fun Stuffs' }
  ];

  private audio: HTMLAudioElement;
  overlayWidth: number = 0;
  original: string = 'Tuan Minh\'s  Website';
  text: string = this.original;
  hovered: boolean = false;
  time: string = '';

  constructor(private clockService: ClockService) {
    this.audio = new Audio();
    this.audio.src = 'audios/gangnamstyle2.mp3';
    this.audio.load();
  }

  ngOnInit() {
    this.audio.addEventListener('timeupdate', () => this.updateOverlayWidth());
    this.clockService.getTime().subscribe(time => {
      this.time = time;
    });
  }

  playGangnamStyle() {
    this.audio.volume = 0.3;
    this.audio.play().catch( () => { 
      this.text = 'Please allow audio for the best experience';
      return;
    });
    this.text = 'OOPA GANGNAM STYLE';
    this.hovered = true;
  }

  pauseGangnamStyle() {
    this.audio.pause();
    this.text = this.original;
    this.hovered = false;
  }

  updateOverlayWidth() {
    const percentage = (this.audio.currentTime / this.audio.duration) * 100;
    this.overlayWidth = percentage;
  }
}
