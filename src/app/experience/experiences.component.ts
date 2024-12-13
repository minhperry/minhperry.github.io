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
      title: 'Studentische Hilfskraft an der TU Dortmund',
      start: '04.2024',
      end: '09.2024',
      description: [
        "Modul: Datenstruktur und Algorithmus 2.",
        "Unterstützung für Studenten mit Programmieraufgaben.",
        "Benotung, Korrektur und Feedback von die Lösungen."
      ]
    }
  ]

  protected projects: TimelineEvent[] = [
    {
      title: 'Eigenprojekt „Skyblock Simulator“',
      start: '08.2024',
      description: [
        "Simulationsspiele von Mechanismen und Tools für das Spiel „Hypixel Skyblock“.",
        "Front in Angular 19 mit Server Side Rendering.",
        "Kleines Backend in Node 22 mit Express.",
      ]
    }, {
      title: 'Beitragender zu Minecraft-Mod-Projekt',
      start: '06.2024',
      description: [
        "Contributor an das QoL-Mod „SkyHanni“ von hannibal02.",
        "Implementierung von Features und Bugfixes.",
      ],
      link: 'https://github.com/hannibal002/SkyHanni'
    }, {
      title: 'Spark: Ein Twitter-ähnliches Social Media Platform',
      start: '04.2023',
      end: '07.2023',
      description: [
        "Frontend mit Angular 16, Backend mit Spring Boot 3.",
        "Einfache CRUD-Operationen für Posts, Kommentare und Likes.",
        "Authentifizierung und Autorisierung mit JWT."
      ],
      link: 'https://github.com/minhperry/wt2-ss23-tudo'
    }, {
      title: 'Software-Praktikum',
      start: 'vsl. 01.2025',
      end: 'vsl 03.2025',
      description: "Ein Modul zum Entwickeln von einem Spiel in Gruppenarbeit."
    }
  ]
}
