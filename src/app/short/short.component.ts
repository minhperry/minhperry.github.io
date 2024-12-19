import {Component} from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {CreatedResponse, ListResponse, ListResult, ShortenerResponse} from '../../interfaces/shortener';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from "../../services/auth/auth.service";
import { MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatList, MatListItem } from '@angular/material/list';

/**
 * @deprecated This has no practical uses.
 */
@Component({
    selector: 'p-short',
    templateUrl: './short.component.html',
    styleUrl: './short.component.scss',
    imports: [MatFormField, MatLabel, MatInput, FormsModule, ReactiveFormsModule, MatHint, MatError, MatPrefix, MatIcon, MatSuffix, MatButton, MatList, MatListItem]
})
export class ShortComponent {
    key = '';
    url = '';
    usePrefix = false;
    listResult: ListResponse | undefined = undefined;

    matcher = new InstantErrorMatcher();

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

    constructor(
        private auth: AuthService,
        private snack: MatSnackBar
    ) {
    }

    send() {
        const finalData = {
            key: this.key,
            value: this.httpString() + this.url,
        }


        this.auth.postWithAuth<ShortenerResponse>('short', finalData)
            .subscribe({
                next: (data) => {
                    const response = data as CreatedResponse;
                    const [k, v] = Object.entries(response.created)[0];
                    this.success('Created s.7278008.xyz/' + k + ' ➜ ' + v);
                },
                error: (error) => {
                    if (error.status === 409) {
                        this.warning('Key already exists!');
                    } else if (error.status === 500) {
                        this.error('Server error!');
                    } else {
                        this.error('Failed to create short link!');
                    }
                },
            });
    }

    isCorrectType(lr: ListResponse | undefined): lr is ListResult {
        return lr !== undefined && 'result' in lr;
    }

    list() {
        this.auth.getWithAuth<ListResponse>('short')
            .subscribe({
            next: (data) => {
                if (this.isCorrectType(data)) {
                    this.listResult = data;
                }
            },
            error: (error) => {
                if (error.status === 500) {
                    this.error('Server error!');
                } else {
                    this.error('Failed to get items!');
                }
            }
        });
    }

    copy(s: string, data: string) {
        switch (s) {
            case 'k':
                navigator.clipboard.writeText('s.7278008.xyz/' + data).then(() =>
                    this.info('Copied s.7278008.xyz/' + data + ' to clipboard!')
                );
                break;
            case 'u':
                navigator.clipboard.writeText(data).then(() =>
                    this.info('Copied ' + data + ' to clipboard!')
                )
                break;
        }
    }

    httpString() {
        return this.usePrefix ? 'https://' : '';
    }

    private success(message: string) {
        this.snack.open(message, 'Close', {
            duration: 2000,
            panelClass: ['sb-success']
        });
    }

    private error(message: string) {
        this.snack.open(message, 'Close', {
            duration: 2000,
            panelClass: ['sb-error']
        });
    }

    private warning(message: string) {
        this.snack.open(message, 'Close', {
            duration: 2000,
            panelClass: ['sb-warning']
        });
    }

    private info(message: string) {
        this.snack.open(message, 'Close', {
            duration: 2000,
            panelClass: ['sb-info']
        });
    }
}

export class InstantErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
