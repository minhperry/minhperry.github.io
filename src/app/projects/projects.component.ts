import { Component } from '@angular/core';

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
export class ProjectsComponent {
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
      description: 'This portfolio website.',
      link: './',
      since: 'From July 2024 until now'
    },
    {
      title: 'Skyblock Simulation',
      description: 'A simulation of various game mechanics in Hypixel Skyblock.',
      link: 'https://skysim.pages.dev/',
      since: 'From July 2024 until now'
    }
  ]
}
