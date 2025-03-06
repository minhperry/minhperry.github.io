import {Component, Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SelectButton, SelectButtonOptionClickEvent} from 'primeng/selectbutton';
import {FormsModule} from '@angular/forms';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';

export interface LanguageEntry {
  text: string,
  code: string
}

@Component({
  selector: 'p-language-picker',
  imports: [
    SelectButton,
    FormsModule
  ],
  templateUrl: './language-picker.component.html',
  styleUrl: './language-picker.component.scss'
})
export class LanguagePickerComponent {
  availableLangs: LanguageEntry[] = [{text: 'English', code: 'en'}, {text: 'Deutsch', code: 'de'}, {text: 'Tiếng Việt', code: 'vi'}];
  currentLang: string;

  @Input({required: true}) panelSize: 'small' | 'medium' | 'large' = 'medium'

  constructor(protected trans: TranslateService, private ls: LocalStorageService) {
    this.currentLang = ls.getItem('lang') || this.trans.currentLang
    console.log('currentLang', this.currentLang)
  }

  onLanguageChange(event: SelectButtonOptionClickEvent) {
    console.log('onLanguageChange', event)
    const code = (event.option as LanguageEntry).code
    console.log('lang code', code)
    this.trans.use(code)
    this.ls.setItem('lang', code)
  }
}
