import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'p-pnf',
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss',
    imports: [RouterLink, NgOptimizedImage]
})
export class PageNotFoundComponent {
}
