import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string = '';

  constructor(
    private auth: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>
  ) { }

  onNoClick(): void {}

  login(): void {}
}
