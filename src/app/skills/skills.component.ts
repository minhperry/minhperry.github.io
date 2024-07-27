import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: { [skill: string]: number } = {
    'Angular': 39,
    'TypeScript': 38,
    'HTML': 75,
    'CSS': 25,
    'Java': 90,
    'C++': 85,
    'Python': 87,
    'Kotlin': 51
  };

  skillsSvgMap: { [skill: string]: string } = {
    'Angular': 'icons/languages/angular.svg',
    'TypeScript': 'icons/languages/typescript.svg',
    'HTML': 'icons/languages/html-5.svg',
    'CSS': 'icons/languages/css-3.svg', 
    'Java': 'icons/languages/java.svg',
    'C++': 'icons/languages/cpp.svg',
    'Python': 'icons/languages/python.svg',
    'Kotlin': 'icons/languages/kotlin.svg'
  };

  skillEntries: { skill: string, rating: number, currentRating: number, iconUrl: string }[] = [];

  ngOnInit(): void {
    this.skillEntries = Object.keys(this.skills).map(skill => ({
      skill,
      rating: this.skills[skill],
      currentRating: 0,
      iconUrl: this.skillsSvgMap[skill]
    }));
    this.animateSkills();
  }

  animateSkills(): void {
    setTimeout(() => {
      this.skillEntries.forEach(entry => {
        entry.currentRating = entry.rating;
      });
    }, 0);
  }
}
