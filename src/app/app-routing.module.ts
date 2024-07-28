import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SocialComponent } from './social/social.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SkyblockComponent } from './skyblock/skyblock.component';
import { FunComponent } from './fun/fun.component';

const routes: Routes = [
  { path: '', component: AboutmeComponent, title: "Welcome to my page", data: {animation: 'HomePage'} },
  { path: 'skyblock', component: SkyblockComponent, title: "Skyblock Simulation" },
  { path: 'socials', component: SocialComponent, title: "My social medias" },
  { path: 'fun', component: FunComponent, title: "Fun stuffs" },
  { path: 'changelog', component: FunComponent, title: "Changelog" },
  { path: '**', component: PageNotFoundComponent, title: "Ooopsie woospie you made a fucky wucky" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
