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
  selector: 'p-other',
  templateUrl: './other.component.html',
})
export class OtherComponent {
  specialSkills: SpecialSkill[] = [
    {
      icon: 'team-line',
      title: 'Scrum & Agile',
      description: 'Workshop "Agile meets Minecraft" beim adesso SE Dortmund.'
    },
    {
      icon: 'shield-check-line',
      title: 'Security',
      description: 'Einstiegserfahrung in Sicherheit (CTF-Event beim viadee Unternehmensberatung AG Dortmund).'
    }
  ];

  additionalExperience: AdditionalExperience[] = [
    {
      icon: 'flag-line',
      title: 'Freiwilliger Helfer',
      items: [
        'Am DoKomi 2024 (Anime- und Japan-Kultur-Convention) in Düsseldorf.',
        'Workshop-Helfer: Begleitung der Gäste in den Workshopsräume.'
      ]
    },
    {
      icon: 'server-line',
      title: 'Systemmanagement',
      items: [
        'Einstiegserfahrungen mit System- und Firewall-Konfiguration auf einem Linux VPS.',
        'Nginx als Reverse Proxy und SSL-Setup für sicheren Datenverkehr.',
        'Einrichtung und Verwaltung von Webapps auf einem VPS.',
        'DNS Einstellungen mit Cloudflare als Proxy.'
      ]
    }
  ];
}