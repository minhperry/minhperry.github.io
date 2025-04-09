import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

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
  imports: [
    TranslatePipe
  ]
})
export class OtherComponent {
  specialSkills: SpecialSkill[] = [
    {
      icon: 'team-line',
      title: 'Scrum & Agile',
      description: 'other.scrum.desc'
    },
    {
      icon: 'shield-check-line',
      title: 'other.security.title',
      description: 'other.security.desc'
    }
  ];

  additionalExperience: AdditionalExperience[] = [
    {
      icon: 'flag-line',
      title: 'other.dokomi.title',
      items: [
        'other.dokomi.desc.0',
        'other.dokomi.desc.1',
      ]
    },
    {
      icon: 'server-line',
      title: 'other.sysadmin.title',
      items: [
        'other.sysadmin.desc.0',
        'other.sysadmin.desc.1',
        'other.sysadmin.desc.2',
        'other.sysadmin.desc.3',
      ]
    }
  ];
}