import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock/clock.service';
import { AuthService } from '../../services/auth/auth.service';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'navibar',
  templateUrl: './navibar.component.html',
  styleUrl: './navibar.component.scss',
})
export class NavibarComponent implements OnInit {
  naviLinks: NavLink[] = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/socials', label: 'Socials' },
    // { path: '/fun', label: 'Fun Stuffs' }
  ];

  original: string = 'Portfolio';
  text: string = this.original;
  hovered: boolean = false;
  isLoggedIn: boolean;
  loginButtonText: string = '';

  constructor(private dialog: MatDialog, private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.addStuffs();
  }

  ngOnInit() {
    this.updateText();
  }

  private openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.updateText();
      this.addStuffs();
    });
  }

  processClick() {
    if (this.isLoggedIn) {
      this.authService.logout();
      this.isLoggedIn = false;
      this.naviLinks = this.naviLinks.filter(link => link.path !== '/short');
    } else {
      this.openDialog();
    }
    this.updateText();
  }

  private updateText() {
    this.loginButtonText = this.isLoggedIn ? 'Log Out' : 'Recruiter? Log In!';
  }

  private addShortIfAdmin() {
    if (this.authService.isAdmin()) {
      this.naviLinks.push({ path: '/short', label: 'Short' });
    }
  }

  private addAboutMeIfRecr() {
    if (this.authService.isRecruiter()) {
      this.naviLinks.splice(2, 0, { path: '/me', label: 'About Me' });
    }
  }

  private addStuffs() {
    this.addShortIfAdmin();
    this.addAboutMeIfRecr();
  }

  get loginButtonClass() {
    return this.isLoggedIn ? 'logout' : 'login';
  }  
}
