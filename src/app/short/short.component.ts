import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { CreatedResponse, ErrorResponse, ShortenerResponse } from '../../interfaces/shortener';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrl: './short.component.scss'
})
export class ShortComponent {
  key: string = '';
  url: string = '';
  usePrefix: boolean = false;

  matcher = new InstantErrorMatcher();

  apiUrl = environment.apiUrl + 'short';

  position: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  }

  constructor(private http: HttpClient, private cookie: CookieService, private snackbar: MatSnackBar) {
  }

  send() {
    let finalData = {
      key: this.key,
      value: this.httpString() + this.url,
    }

    this.http.post<ShortenerResponse>(this.apiUrl, 
      finalData,
      { headers: {
        'Content-Type': 'application/json',
        'X-Longass-Api-Header-Name': this.cookie.get('authMd5')
      }}
    ).subscribe({
      next: (data) => {
        let response = data as CreatedResponse;
        const [k, v] = Object.entries(response.created)[0];
        this.snackbar.open('Created s.7278008.xyz/' + k + ' ➜ ' + v , 'Close', this.position)
      },
      error: (error) => {
        if (error.status === 409) {
          this.snackbar.open('Key already exists!', 'Close', this.position)
        } else if (error.status === 500) {
          this.snackbar.open('Server error!', 'Close', this.position)
        } else {
          this.snackbar.open('Unknown error!', 'Close', this.position)
        }
      },
      // complete: () => {console.log('complete')}
    });
  }

  httpString() {
    return this.usePrefix ? 'https://' : '';
  }

  keyFormControl = new FormControl(this.key, [
    Validators.required,
    Validators.maxLength(20),
    Validators.pattern('[a-zA-Z0-9._@-]*'),
  ])

  urlFormControl = new FormControl(this.url, [
    Validators.required,
    Validators.maxLength(1000),
  ])

  
}

export class InstantErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}