import {
  ApplicationRef,
  booleanAttribute, ChangeDetectorRef,
  Component,
  Inject,
  Input,
  numberAttribute,
  OnDestroy,
  PLATFORM_ID
} from '@angular/core';
import {delay, Subscription, tap, timer} from "rxjs";
import {Utils} from "../../services/utils/utils.service";
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
  @Input({transform: numberAttribute}) interval = 2000
  @Input({transform: booleanAttribute}) neon = true
  @Input({transform: numberAttribute}) duration = 200

  currentIndex = 0;
  isVisible = true;

  isStable = false;

  private timeout!: Subscription

  constructor(@Inject(PLATFORM_ID) private plat: object, private appRef: ApplicationRef, private cd: ChangeDetectorRef) {
    this.appRef.isStable.subscribe(stable => {
      if (stable && !this.isStable) {
        this.isStable = true;
        this.startRotating();
      }
    })
  }

  ngOnDestroy(): void {
    Utils.doIfBrowser(this.plat, () => this.timeout.unsubscribe());
  }

  private startRotating() {
    this.timeout = timer(0, this.interval).pipe(
      tap(() => {
        this.isVisible = false;
        this.cd.detectChanges();
      }),
      delay(this.duration),
    ).subscribe(() => {
      if (this.mode === 'random') {
        this.currentIndex = this.getRandomIndex();
      } else {
        this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
      }
      this.isVisible = true;
      this.cd.detectChanges();
    });
  }

  private getRandomIndex(): number {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.textArray.length);
    } while (newIndex === this.currentIndex && this.textArray.length > 1);
    return newIndex;
  }
}
