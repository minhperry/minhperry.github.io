import {Component, Input} from '@angular/core';

@Component({
  selector: 'pp-failed',
  imports: [],
  templateUrl: './failed.component.html',
  styleUrl: './failed.component.scss'
})
export class FailedComponent {
  @Input() title = 'Failed to fetch data!';
  @Input() description = 'Please check your internet connection and try again.';
}
