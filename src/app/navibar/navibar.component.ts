import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

interface NavLink {
    path: string;
    label: string;
    isExternal?: boolean;
}

@Component({
    selector: 'navibar',
    templateUrl: './navibar.component.html',
    styleUrl: './navibar.component.scss',
    imports: [
        MatIcon,
        RouterLink
    ]
})
export class NavibarComponent {
    naviLinks: NavLink[] = [
        {path: '/', label: 'Home'},
        {path: '/socials', label: 'Socials'},
        {path: '/me', label: 'About Me'},
        {path: 'https://blog.minhperry.de/', label: 'Blog', isExternal: true},
    ];
}
