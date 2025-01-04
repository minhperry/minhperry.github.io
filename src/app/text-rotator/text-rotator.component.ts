import {booleanAttribute, Component, Input, numberAttribute, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'p-text-rotator',
  templateUrl: './text-rotator.component.html',
  styleUrl: './text-rotator.component.scss',
  imports: [
    NgClass
  ]
})
export class TextRotatorComponent implements OnInit {
  @Input({required: true}) textArray!: string[]
  //@Input({required: true}) mode!: 'sequential' | 'random'
  @Input({transform: numberAttribute}) duration = 2000
  @Input({transform: booleanAttribute}) neon = true
  // @Input({transform: numberAttribute}) duration = 200

  length = 0;
  ngOnInit() {
    this.length = this.textArray.length
  }

  getAnimationDelay(index: number): string {
    return `${this.duration * index}ms`;
  }

  private getCycle() {
    return this.length * this.duration
  }

  styleObj(index: number) {
    const a = {
      'animation': `rotateWord ${this.getCycle()}ms linear infinite ${this.getAnimationDelay(index)}`
    }
    console.log(a, this.length, this.duration)
    return a
  }
}
