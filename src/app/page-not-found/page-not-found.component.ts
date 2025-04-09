import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'p-pnf',
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss',
  imports: [RouterLink, NgOptimizedImage, TranslatePipe]
})
export class PageNotFoundComponent {
}
