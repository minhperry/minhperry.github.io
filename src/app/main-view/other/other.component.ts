import { Component } from '@angular/core';

interface SpecialSkill {
  icon: string;
  title: string;
  description: string;
}

interface AdditionalExperience {
  icon?: string;
  title: string;
  items: string[];
}

@Component({
  selector: 'pp-other',
  templateUrl: './other.component.html',
})
export class OtherComponent {
  specialSkills: SpecialSkill[] = [
    {
      icon: 'team-line',
      title: 'Scrum & Agile',
      description: 'Workshop "Agile meets Minecraft" at adesso SE Dortmund.'
    },
    {
      icon: 'shield-check-line',
      title: 'Security',
      description: 'Attended CTF event at viadee Unternehmensberatung AG Dortmund ' +
        'as well as university module "Sicherheit: Fragen und Lösungen".'
    }
  ];

  additionalExperience: AdditionalExperience[] = [
    {
      icon: 'server-line',
      title: 'System management',
      items: [
        'Experience with system and firewall configuration on my own Linux-based VPS.',
        'Nginx as reverse proxy and SSL setup for save data traffic.',
        'Setting up and managing web apps on that VPS.',
        'DNS setup with Cloudflare as a proxy.'
      ]
    },
    {
      icon: 'flag-line',
      title: 'Freiwilliger Helfer',
      items: [
        'At DoKomi 2024 and 2025 (Anime and Japan Culture Convention) in Düsseldorf.',
        'Workshop Helper: Guide for guest into specific workshop room.'
      ]
    }
  ];
}