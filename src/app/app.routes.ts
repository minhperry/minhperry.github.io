import {Routes} from '@angular/router';
import {AboutmeComponent} from './aboutme/aboutme.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LandingComponent} from './landing/landing.component';
import {SkillsComponent} from "./experience/skills/skills.component";

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: "Welcome to my page"
  },
  {
    path: 'projects',
    component: AboutmeComponent,
    title: "Projects",
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: "Skills",
  },
  {
    path: 'experiences',
    component: AboutmeComponent,
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