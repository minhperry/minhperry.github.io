import { Component, OnInit } from '@angular/core';

interface SkillEntry {
  skill: string;
  rating: number;
  wordRating: Rating;
  iconUrl: string;
}

enum Rating {
  BEGINNER = 'Beginner',
  FAMILIAR = 'Familiar',
  COMPETENT = 'Competent',
  PROFICIENT = 'Proficient',
  ADVANCED = 'Advanced',
  EXPERT = 'Expert'
}

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: { [skill: string]: number } = {
    'Angular': 42,
    'TypeScript': 41,
    'HTML': 75,
    'CSS': 32,
    'Java': 90,
    'C++': 85,
    'Python': 87,
    'Kotlin': 51,
    'Cloudflare Workers': 10,
  };

  skillsSvgMap: { [skill: string]: string } = {
    'Angular': 'icons/languages/angular.svg',
    'TypeScript': 'icons/languages/typescript.svg',
    'HTML': 'icons/languages/html-5.svg',
    'CSS': 'icons/languages/css-3.svg', 
    'Java': 'icons/languages/java.svg',
    'C++': 'icons/languages/cpp.svg',
    'Python': 'icons/languages/python.svg',
    'Kotlin': 'icons/languages/kotlin.svg',
    'Cloudflare Workers': 'icons/languages/cf-workers.svg'
  };

  skillEntries: SkillEntry[] = [];

  ngOnInit(): void {
    this.skillEntries = Object.keys(this.skills).map(skill => ({
      skill,
      rating: this.skills[skill],
      wordRating: this.getWordRating(this.skills[skill]),
      iconUrl: this.skillsSvgMap[skill]
    }));
  }

  getWordRating(rating: number): Rating {
    if (rating <= 20) {
      return Rating.BEGINNER;
    } else if (rating <= 40) {
      return Rating.FAMILIAR;
    } else if (rating <= 60) {
      return Rating.COMPETENT;
    } else if (rating <= 80) {
      return Rating.PROFICIENT;
    } else if (rating <= 90) {
      return Rating.ADVANCED;
    } else {
      return Rating.EXPERT;
    }
  }
}
