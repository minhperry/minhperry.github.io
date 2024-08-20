import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

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

  constructor(private auth: AuthService) {

  }
}