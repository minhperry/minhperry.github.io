import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavibarComponent} from "./navibar/navibar.component";
import {FooterComponent} from "./footer/footer.component";
import {TranslateService} from "@ngx-translate/core"
import {LocalStorageService} from '../services/local-storage/local-storage.service';

@Component({
  selector: 'p-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavibarComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
  constructor(private router: Router, private trans: TranslateService, private ls: LocalStorageService) {
    this.trans.addLangs(['en', 'de', 'vi'])
    this.trans.setDefaultLang('en')
    this.trans.use(this.ls.getItem('lang') || 'en')
  }

  shouldRenderFooter(): boolean {
    const excluded = ['/']
    return !excluded.includes(this.router.url);
  }
}
