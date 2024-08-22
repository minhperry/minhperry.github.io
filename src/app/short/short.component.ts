import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrl: './short.component.scss'
})
export class ShortComponent {
  key: string = '';
  shortUrl: string = '';

  isHttps: boolean = true;

  constructor() {}

  send() {
  }

  keyFormControl = new FormControl(this.key, [
    Validators.required,
    Validators.maxLength(20),
    Validators.pattern('[a-zA-Z0-9._@-]*'),
  ])

  urlFormControl = new FormControl(this.shortUrl, [
    Validators.required,
    Validators.maxLength(1000),
    // Validators.pattern('https?:\/\/.*')
  ])

  matcher = new InstantErrorMatcher();
}

export class InstantErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}