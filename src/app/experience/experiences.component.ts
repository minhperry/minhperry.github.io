import { Component } from '@angular/core';
import {TimelineEvent} from "../../interfaces/date-entry";

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  jobExperience: TimelineEvent[] = [
    {
      id: 0,
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

  projects: TimelineEvent[] = [
    {
      id: 0,
      title: 'Eigenprojekt „Skyblock Simulator“',
      start: '08.2024',
      end: 'heute',
      description: "Simulationsspiele von Mechanismen und Tools für das Spiel „Hypixel Skyblock“. Geschrieben " +
        "in Angular 19 mit Server Side Rendering. Gestyled mit SCSS und Bootstrap 5.3."
    }, {
      id: 1,
      title: 'Beitragender zu Minecraft-Mod-Projekt',
      start: '06.2024',
      end: 'heute',
      description: [
        "Contributor an das QoL-Mod „SkyHanni“ von hannibal02.",
        "Implementierung von Features und Bugfixes.",
        "Projekt-GitHub: <a href='https://github.com/hannibal002/SkyHanni'>https://github.com/hannibal002/SkyHanni</a>"
      ]
    }, {
      id: 2,

    }

  ]
}
