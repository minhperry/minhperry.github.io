import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  marqueeText = [
    'Mobile Support TBA',
    'Redesign in Progress',
    'I will never support light mode'
  ]
}
