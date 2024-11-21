import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { NavibarComponent } from './navibar/navibar.component';
import { SocialComponent } from './social/social.component';
import {provideHttpClient, withFetch} from '@angular/common/http';
import { IconPipe } from '../pipes/icon/icon.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FunComponent } from './fun/fun.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { LandingComponent } from './landing/landing.component';
import { ShortComponent } from './short/short.component';

import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommitComponent } from './commit/commit.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatListModule,
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
        LoginComponent,
        ShortComponent,
        CommitComponent
    ],
    providers: [
        provideAnimationsAsync(),
        provideHttpClient(withFetch()),
        SsrCookieService,
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } },
        provideClientHydration(withEventReplay())
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

// platformBrowserDynamic().bootstrapModule(AppModule)
