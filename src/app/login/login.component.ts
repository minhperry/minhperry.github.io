import { Component } from '@angular/core';
import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

/*
* @Deprecated Do not use this.
* */
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatFormField, MatLabel, MatInput, FormsModule, MatDialogActions, MatButton]
})
export class LoginComponent {
  password: string = '';
  showPassword: boolean = false;
  error: string = '';
  baseFadeDuration: number = 1500;

  constructor(
    private auth: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  login(): void {
    this.auth.login(this.password).subscribe(succ  => {
      if (succ) {
        if (this.auth.isAdmin()) {
          this.router.navigate(['short']);
        }
        this.dialogRef.close();
      } else {
        this.error = 'Invalid password';
        setTimeout(() => {
          const errorElement = document.querySelector('.error');
          if (errorElement) {
              errorElement.classList.add('hidden');
          }
        }, this.baseFadeDuration);

        setTimeout(() => {
          this.error = '';
        }, this.baseFadeDuration + 500);
      }
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword
  }
}
