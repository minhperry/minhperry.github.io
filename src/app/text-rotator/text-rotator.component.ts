import {
  booleanAttribute,
  Component,
  Inject,
  Input,
  numberAttribute,
  OnDestroy,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import {delay, Subscription, tap, timer} from "rxjs";
import {Utils} from "../../services/utils/utils.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'p-text-rotator',
  imports: [NgClass],
  templateUrl: './text-rotator.component.html',
  styleUrl: './text-rotator.component.scss'
})
export class TextRotatorComponent implements OnInit, OnDestroy {
  @Input({required: true}) textArray!: string[]
  @Input({required: true}) mode!: 'sequential' | 'random'
  @Input({transform: numberAttribute}) interval = 2000
  @Input({transform: booleanAttribute}) neon = true
  @Input({transform: numberAttribute}) duration = 200

  currentIndex = 0;
  isVisible = true;

  private timeout!: Subscription

  constructor(@Inject(PLATFORM_ID) private plat: object) {
  }

  ngOnInit(): void {
    Utils.doIfBrowser(this.plat, () => {
      this.timeout = timer(0, this.interval).pipe(
        tap(() => this.isVisible = false),
        delay(this.duration),
      ).subscribe(() => {
        if (this.mode === 'random') {
          this.currentIndex = this.getRandomIndex();
        } else {
          this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
        }
        this.isVisible = true;
      });
    })
  }

  ngOnDestroy(): void {
    Utils.doIfBrowser(this.plat, () => this.timeout.unsubscribe());
  }

  private getRandomIndex(): number {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.textArray.length);
    } while (newIndex === this.currentIndex && this.textArray.length > 1);
    return newIndex;
  }
}
