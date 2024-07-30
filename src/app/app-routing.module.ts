import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SocialComponent } from './social/social.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SkyblockComponent } from './skyblock/skyblock.component';
import { FunComponent } from './fun/fun.component';
import { PublicModeGuard } from '../guards/public-mode.guard';

const routes: Routes = [
  { 
    path: 'home', 
    component: AboutmeComponent, 
    title: "Welcome to my page",
    data: {animation: 'HomePage'},
    canActivate: [PublicModeGuard] 
  },
  { 
    path: 'skyblock', 
    component: SkyblockComponent, 
    title: "Skyblock Simulation", 
    canActivate: [PublicModeGuard]
  },
  { 
    path: 'socials', 
    component: SocialComponent, 
    title: "My social medias",
    canActivate: [PublicModeGuard]
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
    canActivate: [PublicModeGuard]
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
