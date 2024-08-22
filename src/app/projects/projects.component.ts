import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  link: string;
  since?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    { 
      title: 'Module \'Web-Technologie-2\'', 
      description: 'A Twitter-like platform with Angular frontend and Spring backend.', 
      link: 'https://github.com/minhperry/wt2-ss23-tudo',
      since: 'From April 2023 to July 2023' 
    },
    { 
      title: 'Skyhanni',
      description: 'Open source contribution to the Minecraft mod \'Skyhanni\' for the game Hypixel Skyblock.',
      link: 'https://github.com/minhperry/SkyHanni/',
      since: 'From June 2024 until now'
    },
    {
      title: 'Portfolio',
      description: 'This portfolio website. Uses Angular and Cloudflare Pages.',
      link: './',
      since: 'From July 2024 until now'
    },
    {
      title: 'Skyblock Simulation',
      description: 'A simulation of various game mechanics in Hypixel Skyblock.',
      link: 'https://skysim.pages.dev/',
      since: 'From July 2024 until now'
    },
    {
      title: 'Link Shortener',
      description: 'My own personal link shortener with custom short-keys, based on Cloudflare KV.',
      link: 'https://s.7278008.xyz/source',
      since: 'From August 2024 until now'
    }
  ]

  ngOnInit(): void {
    this.projects = this.returnShuffled();
  }

  private returnShuffled(): Project[] {
    return this.projects.sort(() => Math.random() - 0.5);
  }
}
