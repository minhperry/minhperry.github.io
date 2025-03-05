import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavibarComponent} from "./navibar/navibar.component";
import {FooterComponent} from "./footer/footer.component";
import {TranslateService} from "@ngx-translate/core"

@Component({
  selector: 'p-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavibarComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
  constructor(private router: Router, private trans: TranslateService) {
    this.trans.addLangs(['en', 'de', 'vi'])
    this.trans.setDefaultLang('en')
    this.trans.use('en')
  }

  shouldRenderFooter(): boolean {
    const excluded = ['/']
    return !excluded.includes(this.router.url);
  }
}
