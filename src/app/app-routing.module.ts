import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SocialComponent } from './social/social.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FunComponent } from './fun/fun.component';
import { ProjectsComponent } from './projects/projects.component';
import { LandingComponent } from './landing/landing.component';
import { NgnhatanhComponent } from './ngnhatanh/ngnhatanh.component';
import { ShortComponent } from './short/short.component';
import { shortGuard } from '../guards/short.guard';
import { hasRoleGuard } from '../guards/aboutme.guard';
import { CommitComponent } from './commit/commit.component';

const routes: Routes = [
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
    path: 'fun', 
    component: FunComponent, 
    title: "Fun stuffs" 
  },
  { 
    path: 'changelog', 
    component: FunComponent, 
    title: "Changelog" ,
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
    path: 'nna/:sach',
    component: NgnhatanhComponent,
    title: "Sach Nguyen Nhat Anh",
  },
  {
    path: 'short',
    component: ShortComponent,
    title: "Shorten URL",
    canActivate: [shortGuard],
  },
  {
    path: 'commits',
    component: CommitComponent,
    title: "Commits for this site",
  },
  { 
    path: '**', 
    redirectTo: '/404',
    title: "Ooopsie woospie you made a fucky wucky" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
