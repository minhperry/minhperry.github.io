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
    { path: '/me', label: 'About Me' },
    { path: '/projects', label: 'Projects' },
    { path: '/socials', label: 'Socials' },
    // { path: '/fun', label: 'Fun Stuffs' }
  ];

  original: string = 'Tuan Minh\'s  Website';
  text: string = this.original;
  hovered: boolean = false;
  time: string = ''
  isLoggedIn: boolean = false;

  constructor(private clockService: ClockService, private dialog: MatDialog, private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.clockService.getTime().subscribe(time => {
      this.time = time;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
    });
  }
}
