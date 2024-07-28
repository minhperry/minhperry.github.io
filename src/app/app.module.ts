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
import { SkyblockComponent } from './skyblock/skyblock.component';
import { FunComponent } from './fun/fun.component';
import { PaneComponent } from './skyblock/pane/pane.component';
import { PaneGameComponent } from './skyblock/panegame/panegame.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    SkillsComponent,
    NavibarComponent,
    SocialComponent,
    IconPipe,
    PageNotFoundComponent,
    SkyblockComponent,
    FunComponent,
    PaneComponent,
    PaneGameComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
