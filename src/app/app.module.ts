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

import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth/auth.service';

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
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PdfViewerModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    CookieService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)