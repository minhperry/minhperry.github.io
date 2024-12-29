import { Component } from '@angular/core';
import { Groups } from '../../interfaces/links';
import { SocialService } from '../../services/social/social.service';
import {TitleCasePipe, KeyValuePipe, NgOptimizedImage} from '@angular/common';
import { IconPipe } from '../../pipes/icon/icon.pipe';

@Component({
    selector: 'p-social',
    templateUrl: './social.component.html',
    styleUrl: './social.component.scss',
  imports: [TitleCasePipe, KeyValuePipe, IconPipe, NgOptimizedImage]
})
export class SocialComponent {
  socials: Groups | undefined;
  failed: boolean | null = null;

  constructor(private socialService: SocialService) {
    this.socialService.get().subscribe({
      next: (data) => {
        this.socials = data;
        this.failed = false;
      },
      error: () => {
        this.socials = {codes: [], network: [], media: [], games: [], contacts: []};
        this.failed = true;
      }
  });
  }

  asIs() {return 0}
}
