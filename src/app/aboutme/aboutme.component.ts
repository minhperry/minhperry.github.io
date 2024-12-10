import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { SkillsComponent } from '../skills/skills.component';

type MaybeString = string | undefined;

interface MeReply {
    dob: string;
    address: {
        street: string;
        city: string;
    },
    phone: string;
}

@Component({
    selector: 'aboutme',
    templateUrl: './aboutme.component.html',
    styleUrl: './aboutme.component.scss',
    imports: [SkillsComponent]
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
