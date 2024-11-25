import {Routes} from '@angular/router';
import {AboutmeComponent} from './aboutme/aboutme.component';
import {SocialComponent} from './social/social.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProjectsComponent} from './projects/projects.component';
import {LandingComponent} from './landing/landing.component';
import {hasRoleGuard} from '../guards/aboutme.guard';

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
        canActivate: [hasRoleGuard],
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
        path: 'projects',
        component: ProjectsComponent,
        title: "My projects",
    },
    {
        path: 'securedpdf/lebenslauf.pdf',
        canActivate: [hasRoleGuard],
        children: []
    },
    {
        path: '**',
        redirectTo: '/404',
        title: "Ooopsie woospie you made a fucky wucky"
    }
]