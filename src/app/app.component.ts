import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavibarComponent} from "./navibar/navibar.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
    selector: 'p-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NavibarComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
    constructor(private router: Router) {}

    shouldRenderFooter(): boolean {
        const excluded = ['/']
        return !excluded.includes(this.router.url);
    }
}
