import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {environment} from "../../environments/environment";
import {MatTooltip} from "@angular/material/tooltip";

interface NavLink {
    path: string;
    label: string;
    isExternal?: boolean;
}

@Component({
    selector: 'p-navibar',
    templateUrl: './navibar.component.html',
    styleUrl: './navibar.component.scss',
    imports: [
        MatIcon,
        RouterLink,
        MatTooltip
    ]
})
export class NavibarComponent {
    naviLinks: NavLink[] = [
        {path: '/', label: 'Home'},
        {path: '/me', label: 'About Me'},
        {path: '/socials', label: 'Socials'},
        {path: 'https://blog.minhperry.de/', label: 'Blog', isExternal: true},
    ];

    version = environment.version
}
