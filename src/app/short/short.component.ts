import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { CreatedResponse, ListEntry, ListResponse, ListResult, ShortenerResponse } from '../../interfaces/shortener';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrl: './short.component.scss'
})
export class ShortComponent {
  key: string = '';
  url: string = '';
  usePrefix: boolean = false;
  listResult: ListResponse | undefined = undefined;

  matcher = new InstantErrorMatcher();

  apiUrl = environment.apiUrl + 'short';

  position: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
  }

  constructor(
    private http: HttpClient, 
    private cookie: CookieService, 
    private toast: ToastService
  ) {}

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
        this.toast.success('Created!', 'Created s.7278008.xyz/' + k + ' ➜ ' + v)
      },
      error: (error) => {
        if (error.status === 409) {
          this.toast.warning('Conflict!', 'Key already exists!')
        } else if (error.status === 500) {
          this.toast.error('Server error!', 'Something went wrong on the server!')
        } else {
          this.toast.error('Unknown error!', 'Something went wrong!')
        }
      },
      // complete: () => {console.log('complete')}
    });
  }

  isCorrectType(lr: ListResponse | undefined): lr is ListResult {
    return lr !== undefined && 'result' in lr;
  }

  getKeys(entry: ListEntry): string[] {
    return Object.keys(entry);
  }

  list() {
    this.http.get<ListResponse>(this.apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-Longass-Api-Header-Name': this.cookie.get('authMd5')
      }
    }).subscribe({
      next: (data) => {
        if (this.isCorrectType(data)) {
          this.listResult = data;
        }
      },
      error: (error) => {
        if (error.status === 500) {
          this.toast.error('Server error!', 'Something went wrong on the server!')
        } else {
          this.toast.error('List failed!', 'Cannot list keys!')
        }
      }
    });
  }

  copy(s: string, data: string) {
    switch (s) {
      case 'k':
        navigator.clipboard.writeText('s.7278008.xyz/' + data);
        this.toast.info('Copied', 'Copied s.7278008.xyz/' + data + ' to clipboard!')
        break;
      case 'u':
        navigator.clipboard.writeText(data);
        this.toast.info('Copied', 'Copied ' + data + ' to clipboard!')
        break;
    }
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
    // Validators.pattern('(https?|ftp)://[^\\s/$.?#].[^\\s]*'),
  ])

  
}

export class InstantErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}