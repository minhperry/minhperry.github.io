import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

type UndefableString = string | undefined; 

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
  isLoggedIn: boolean;

  born: UndefableString
  address: UndefableString
  phone: UndefableString

  constructor(private auth: AuthService) {
    this.isLoggedIn = this.auth.isLoggedIn();

    if (true) {
      this.born = '6th July 2002, Ha Noi, Viet Nam';
      this.address = 'Schulte-Heuthaus-Straße 47, 44379 Dortmund';
      this.phone = '+49 1577 897 0645';
      console.log(this.born, this.address, this.phone);
    }
  }
}