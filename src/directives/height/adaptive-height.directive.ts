import {Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[pAdaptiveHeight]'
})
export class AdaptiveHeightDirective implements OnInit, OnDestroy {
  private navbarHeight = 0;
  private observer!: MutationObserver;
  private transitionInProgress = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit(): void {
    this.setHeight();
    this.observeNavbarHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.setHeight();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setHeight(): void {
    const navbar = document.querySelector('p-navbar');
    if (navbar) {
      this.navbarHeight = navbar.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      this.renderer.setStyle(this.el.nativeElement, 'height', `${windowHeight - this.navbarHeight}px`);
    }
  }

  private observeNavbarHeight(): void {
    const navbar = document.querySelector('p-navbar');
    if (navbar) {
      this.observer = new MutationObserver(() => this.setHeight());
      this.observer.observe(navbar, {attributes: true, childList: true, subtree: true});

      navbar.addEventListener('transitionstart', () => this.onTransitionStart());
      navbar.addEventListener('transitionend', () => this.onTransitionEnd());
    }
  }

  private onTransitionStart(): void {
    this.transitionInProgress = true;
    this.adjustHeightDuringTransition();
  }

  private onTransitionEnd(): void {
    this.transitionInProgress = false;
    this.setHeight(); // Final height adjustment after the transition
  }

  private adjustHeightDuringTransition(): void {
    if (this.transitionInProgress) {
      // Continuously adjust height while the transition is in progress
      requestAnimationFrame(() => {
        this.setHeight(); // Adjust height dynamically
        if (this.transitionInProgress) {
          this.adjustHeightDuringTransition(); // Keep adjusting if transition is still going
        }
      });
    }
  }
}
