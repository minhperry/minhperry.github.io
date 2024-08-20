import { Component } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  name = "Phan, Tuan Minh 🇻🇳/🇩🇪"
  bio: string = '22 / Student @ ';
  tuSvg: string = 'icons/tudo.svg';
  profilePictureUrl: string = 'self.png';
}