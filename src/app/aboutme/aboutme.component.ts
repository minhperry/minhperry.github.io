import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { ExperiencesComponent } from '../experience/experiences.component';

type MaybeString = string | undefined;

@Component({
    selector: 'aboutme',
    templateUrl: './aboutme.component.html',
    styleUrl: './aboutme.component.scss',
    imports: [ExperiencesComponent]
})
export class AboutmeComponent implements OnInit {
    name = "Phan, Tuan Minh 🇻🇳/🇩🇪"
    bio: string = '22 / Student @ ';
    tuSvg: string = 'icons/tudo.svg';
    profilePictureUrl: string = 'self.jpg';
    isLoggedIn: boolean;

    born: MaybeString
    address: MaybeString
    phone: MaybeString

    constructor(private auth: AuthService) {
        this.isLoggedIn = this.auth.isLoggedIn();
    }

    ngOnInit(): void {

    }
}
