import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JsonService } from '../../services/json/json.service';

export interface Links {
  name: string;
  url: string;
  logo: string;
  hidden: boolean;
}

interface Groups {
  codes: Links[];
  network: Links[];
  media: Links[];
  games: Links[];
  contacts: Links[];
}

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent implements OnInit {
  socialPath = 'data/socials.json';
  socials: Groups | undefined;

  constructor(private jsonService: JsonService<Groups>) {
    
  }

  ngOnInit(): void {
      this.jsonService.get(this.socialPath).subscribe(
        (data: Groups) => {
            this.socials = data;
            console.log(this.socials);
        },
        (error) => {
            console.error(error);
        }
    );
  }

  asIs() {return 0}
}
