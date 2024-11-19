import {Component, OnInit} from '@angular/core';

interface Project {
    title: string;
    description: string;
    source: string
    link?: string;
    since?: string;
}

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    standalone: false
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = [
        {
            title: 'Module \'Web-Technologie-2\'',
            description: 'A Twitter-like platform with Angular frontend and Spring backend.',
            source: 'https://github.com/minhperry/wt2-ss23-tudo',
            since: 'From April 2023 to July 2023'
        },
        {
            title: 'Skyhanni',
            description: 'Open source contribution to the Minecraft mod \'Skyhanni\' for the game Hypixel Skyblock.',
            source: 'https://github.com/minhperry/SkyHanni/',
            since: 'From June 2024 until now'
        },
        {
            title: 'Portfolio',
            description: 'This portfolio website. Uses Angular and Cloudflare Pages.',
            source: 'https://github.com/minhperry/minhperry.github.io',
            since: 'From July 2024 until now'
        },
        {
            title: 'Skyblock Simulation',
            description: 'A simulation of various game mechanics in Hypixel Skyblock. Self-hosted on a VPS.',
            source: 'https://github.com/minhperry/skyblock-simulator',
            link: 'https://skyblock.minhperry.de',
            since: 'From July 2024 until now'
        },
        {
            title: 'Blog',
            description: 'My personal blog built using Hugo',
            source: 'https://github.com/minhperry/my-blog',
            link: 'https://blog.minhperry.de/',
            since: 'From October 2024 until now'
        }
    ]

    ngOnInit(): void {
        this.projects = this.returnShuffled();
    }

    hasLink(project: Project): boolean {
        return 'link' in project;
    }

    private returnShuffled(): Project[] {
        return this.projects.sort(() => Math.random() - 0.5);
    }
}
