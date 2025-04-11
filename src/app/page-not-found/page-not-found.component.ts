import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {Message} from 'primeng/message';
import {Button} from 'primeng/button';

@Component({
    selector: 'pp-pnf',
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss',
  imports: [RouterLink, NgOptimizedImage, Message, Button]
})
export class PageNotFoundComponent {
}
