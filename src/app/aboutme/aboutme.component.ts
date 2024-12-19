import {Component} from '@angular/core';
import { ExperiencesComponent } from '../experience/experiences.component';

@Component({
    selector: 'p-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrl: './aboutme.component.scss',
    imports: [ExperiencesComponent]
})
export class AboutmeComponent {
}
