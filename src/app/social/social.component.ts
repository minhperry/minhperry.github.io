import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json/json.service';
import { Groups } from '../../interfaces/links';
import { SocialService } from '../../services/social/social.service';

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent implements OnInit {
  socials: Groups | undefined;

  constructor(private socialService: SocialService) {
    
  }

  ngOnInit(): void {
      this.socialService.get().subscribe({
        next: (data) => {
          this.socials = data;
        },
        error: (error) => {
          console.error('Error:', error);
        }
    });
  }

  asIs() {return 0}
}
