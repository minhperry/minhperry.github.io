import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavibarComponent} from "./navibar/navibar.component";
import {FooterComponent} from "./footer/footer.component";
import {initFlowbite} from "flowbite";

@Component({
    selector: 'p-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NavibarComponent, RouterOutlet, FooterComponent]
})
export class AppComponent implements OnInit{
    constructor(private router: Router) {}

    ngOnInit() {
        initFlowbite();
    }

    shouldRenderFooter(): boolean {
        const excluded = ['/']
        return !excluded.includes(this.router.url);
    }
}
