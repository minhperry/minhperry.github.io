import {Routes} from '@angular/router';
import {AboutmeComponent} from './aboutme/aboutme.component';
import {SocialComponent} from './social/social.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LandingComponent} from './landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: "Welcome to my page"
  },
  {
    path: 'me',
    component: AboutmeComponent,
    title: "About me",
    // canActivate: [hasRoleGuard], // TODO: Change this in CV
  },
  {
    path: 'socials',
    component: SocialComponent,
    title: "My social medias",
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