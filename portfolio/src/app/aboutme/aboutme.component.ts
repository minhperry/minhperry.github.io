import { Component } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
  name: string = 'Deez Natz';
  bio: string = '22 / Student @ ';
  tuSvg: string = 'icons/tudo.svg';
  profilePictureUrl: string = 'path/to/your/profile-picture.jpg';
  socialLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/ptm2002', iconUrl: 'icons/linkedin.svg' },
    { platform: 'GitHub', url: 'https://github.com/minhperry', iconUrl: 'icons/github.svg' },
    { platform: 'GitLab', url: 'https://gitlab.com/minhperry', iconUrl: 'icons/gitlab.svg' }
  ];
}