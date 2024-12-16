import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import { Router, RouterLink } from "@angular/router";
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

interface NavLink {
    path: string;
    label: string;
    isExternal?: boolean;
}

@Component({
    selector: 'navibar',
    templateUrl: './navibar.component.html',
    styleUrl: './navibar.component.scss',
    imports: [MatIcon, RouterLink, FormsModule]
})
export class NavibarComponent implements OnInit {
    naviLinks: NavLink[] = [
        {path: '/', label: 'Home'},
        {path: '/socials', label: 'Socials'},
        {path: 'https://blog.minhperry.de/', label: 'Blog', isExternal: true},
        // {path: '/commits', label: 'Commit'},
    ];

    original: string = 'Portfolio';
    text: string = this.original;
    isLoggedIn: boolean;
    loginButtonText: string = '';
    password: string = '';

    constructor(
        private snack: MatSnackBar,
        private auth: AuthService,
        private router: Router
    ) {
        this.isLoggedIn = this.auth.isLoggedIn();
        this.addStuffs();
    }

    get loginButtonClass() {
        return this.isLoggedIn ? 'logout' : 'login';
    }

    ngOnInit() {
        this.updateText();
    }

    processClick() {
        if (this.isLoggedIn) {
            this.auth.logout();
            this.isLoggedIn = false;
            this.naviLinks = this.naviLinks.filter(link =>
                link.path !== '/short' && link.path !== '/me' && !link.path.includes('.pdf')
            );
        } else {
            this.login();
        }
        this.updateText();
    }


    login(): void {
        this.auth.login(this.password).subscribe(succ => {
            if (succ) {
                this.isLoggedIn = true;
                if (this.auth.isAdmin()) {
                    this.redirect('/')
                    this.snack.open('Successfully logged in as ' + this.auth.getRoleCapitalized())
                }
                if (this.auth.isRecruiter()) {
                    this.redirect('me')
                    this.snack.open('Welcome recruiter!')
                }
            } else {
                this.snack.open('Failed to log in!', 'Close');
            }
        });
    }

    private redirect = (to: string) => {
        this.router.navigate([to]).then(() => {
            this.updateText()
            this.addStuffs()
        })
    }

    private updateText() {
        this.loginButtonText = this.isLoggedIn ? 'Log Out' : 'Log in';
    }
    private addHasRightsStuffs() {
        if (this.auth.hasRights()) {
            this.naviLinks.splice(1, 0, {path: '/me', label: 'About Me'});
            this.naviLinks.splice(2, 0, {path: '/securedpdf/lebenslauf.pdf', label: 'CV PDF', isExternal: true})
        }
    }

    private addStuffs() {
        this.addHasRightsStuffs();
    }
}
