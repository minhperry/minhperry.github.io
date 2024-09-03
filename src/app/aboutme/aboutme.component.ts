import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

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
    styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent implements OnInit {
    name = "Phan, Tuan Minh 🇻🇳/🇩🇪"
    bio: string = '22 / Student @ ';
    tuSvg: string = 'icons/tudo.svg';
    profilePictureUrl: string = 'self.png';
    isLoggedIn: boolean;

    born: MaybeString
    address: MaybeString
    phone: MaybeString

    success!: boolean

    constructor(private auth: AuthService) {
        this.isLoggedIn = this.auth.isLoggedIn();
    }

    ngOnInit(): void {
        if (this.isLoggedIn) {
            this.auth.getWithAuth<MeReply>('me').subscribe({
                next: reply => {
                    this.success = true
                    this.born = reply.dob
                    this.address = reply.address.street + ', ' + reply.address.city
                    this.phone = reply.phone
                },
                error: () => {
                    this.success = false
                }
            })
        }
    }
}
