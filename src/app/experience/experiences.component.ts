import { Component } from '@angular/core';
import {TimelineEvent} from "../../interfaces/date-entry";
import {TimelineComponent} from "./timeline/timeline.component";

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  imports: [
    TimelineComponent
  ],
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  protected jobExperience: TimelineEvent[] = [
    {
      title: 'Student Assistant at TU Dortmund',
      start: '04.2024',
      end: '09.2024',
      description: [
        "Module: \"Datenstruktur und Algorithmus 2\" (Data Structures and Algorithms 2).",
        "Support for students with programming tasks.",
        "Grading, correction and feedback of the solutions."
      ]
    }
  ]

  protected projects: TimelineEvent[] = [
    {
      title: 'Module \"Software-Praktikum\"',
      start: '10.02.2025',
      end: '21.03.2025',
      description: "A module of developing a simple multiplayer game in Java in groups."
    }, {
      title: 'Self-project \"Skyblock Simulator\"',
      start: '08.2024',
      description: [
        "Simulation of mechanisms and tools for the gamemode \"Hypixel Skyblock\".",
        "Frontend in Angular 19 with Server Side Rendering.",
        "Small backend in Node 22 with Express.",
      ]
    }, {
      title: 'Contribution to a Minecraft Mod',
      start: '06.2024',
      description: [
        "Contributor for the quality-of-life mod \"SkyHanni\" of hannibal02.",
        "Implementation of features and bug fixes.",
      ],
      link: 'https://github.com/hannibal002/SkyHanni'
    }, {
      title: 'Spark: A Twitter-like social media platform',
      start: '04.2023',
      end: '07.2023',
      description: [
        "Frontend with Angular 16, Backend with Spring Boot 3.",
        "Simple CRUD operations for posts, comments and likes.",
        "Authentication and authorization with JWT.",
      ],
      link: 'https://github.com/minhperry/wt2-ss23-tudo'
    }
  ]
}
