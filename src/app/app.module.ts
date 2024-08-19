import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './skills/skills.component';
import { NavibarComponent } from './navibar/navibar.component';
import { SocialComponent } from './social/social.component';
import { provideHttpClient } from '@angular/common/http';
import { IconPipe } from '../pipes/icon/icon.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FunComponent } from './fun/fun.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { LandingComponent } from './landing/landing.component';
import { NgnhatanhComponent } from './ngnhatanh/ngnhatanh.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    SkillsComponent,
    NavibarComponent,
    SocialComponent,
    IconPipe,
    PageNotFoundComponent,
    FunComponent,
    FooterComponent,
    ProjectsComponent,
    LandingComponent,
    NgnhatanhComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PdfViewerModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)