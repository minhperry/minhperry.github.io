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
    this.auth.login(this.password).subscribe(succ  => {
      if (succ) {
        if (this.auth.isRecruiter()) {
          // ???
          this.dialogRef.close();
        } else if (this.auth.isAdmin()) {
          // ???
          this.dialogRef.close();
          this.router.navigate(['short']);
        } 
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
