import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock/clock.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  time = '';

  constructor(private clock: ClockService) {}

  ngOnInit(): void {
    this.clock.getTime().subscribe(time => {
      this.time = time;
    });
  }
}
