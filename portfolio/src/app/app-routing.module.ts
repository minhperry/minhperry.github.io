import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  { path: '', component: AboutmeComponent },
  { path: 'socials', component: SocialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
