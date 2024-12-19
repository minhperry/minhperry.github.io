import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock/clock.service';

/**
 * @deprecated Deprecated (for now) due to not having a good place to put the footer.
 */
@Component({
    selector: 'p-footer',
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
