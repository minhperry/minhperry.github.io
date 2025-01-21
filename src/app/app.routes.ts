import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LandingComponent} from './landing/landing.component';
import {SkillsComponent} from "./experience/skills/skills.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ExperiencesComponent} from "./experience/experiences.component";

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: "Welcome to my page"
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: "Projects",
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: "Skills",
  },
  {
    path: 'experiences',
    component: ExperiencesComponent,
    title: "Experiences and Education",
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    title: "404 Not Found",
  },
  {
    path: '**',
    redirectTo: '/404',
    title: "Ooopsie woospie you made a fucky wucky"
  }
]