import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicModeHandlerService } from '../../services/http/public-mode-handler.service';

@Component({
  selector: 'pnf',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  isPublic: boolean = false;

  constructor(private phs: PublicModeHandlerService) {}

  ngOnInit(): void {
      this.phs.get().subscribe({
        next: (data) => {
          this.isPublic = data;
        },
        error: (error) => {
          console.error('Error:', error);
        }
      })
  }
}
