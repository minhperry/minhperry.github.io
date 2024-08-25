import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
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
    this.auth.login(this.password).subscribe( resp  => {
      switch (resp.is) {
        case 'recruiter':
          this.auth.cookieService.set(
            'authMd5',
            'recr_' + this.auth.md5(this.password),
            1
          );
          this.dialogRef.close();
          break;
        case 'admin':
          this.auth.cookieService.set(
            'authMd5',
            'admin_' + this.auth.md5(this.password),
            1
          ); 
          this.dialogRef.close();
          this.router.navigate(['short']);
          break;
        default:
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
          break;
      }
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword
  }
}
