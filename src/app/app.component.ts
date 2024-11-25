import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import {NavibarComponent} from "./navibar/navibar.component";

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NavibarComponent, RouterOutlet]
})
export class AppComponent {
}
