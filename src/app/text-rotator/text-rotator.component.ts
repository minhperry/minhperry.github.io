import {booleanAttribute, Component, Input, numberAttribute, OnDestroy} from '@angular/core';
import {delay, Subscription, tap, timer} from "rxjs";
import {NgClass} from "@angular/common";

@Component({
  selector: 'p-text-rotator',
  imports: [NgClass],
  templateUrl: './text-rotator.component.html',
  styleUrl: './text-rotator.component.scss',
  host: {ngSkipHydration: 'true'},
})
export class TextRotatorComponent implements OnDestroy {
  @Input({required: true}) textArray!: string[]
  @Input({required: true}) mode!: 'sequential' | 'random'
  @Input({transform: numberAttribute}) duration = 2000
  @Input({transform: booleanAttribute}) neon = true
  @Input({transform: numberAttribute}) fade = 200

  currentIndex = 0;
  isVisible = true;

  private timeout!: Subscription

  constructor() {
    this.startRotating();
  }

  ngOnDestroy(): void {
    this.timeout.unsubscribe();
  }

  private startRotating() {
    this.timeout = timer(0, this.duration).pipe(
      tap(() => {
        this.isVisible = false;
      }),
      delay(this.fade),
    ).subscribe(() => {
      if (this.mode === 'random') {
        this.currentIndex = this.getRandomIndex();
      } else {
        this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
      }
      this.isVisible = true;
    });
  }

  private getRandomIndex(): number {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.textArray.length);
    } while (newIndex === this.currentIndex && this.textArray.length > 1);
    return newIndex;
  }

  startsWithVowel(text: string): boolean {
    return ['a', 'e', 'i', 'o', 'u'].includes(text.charAt(0).toLowerCase());
  }
}
