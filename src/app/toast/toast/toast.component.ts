import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { Toast } from 'bootstrap';
import { ToastType } from '../../../services/toast/toast.service';
import { fromEvent, take } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent implements OnInit{
  @Output() disposeEv = new EventEmitter();

  @ViewChild('toastElm', { static: true })
  toastElm!: ElementRef;

  @Input()
  type!: ToastType;

  @Input()
  title!: string;

  @Input()
  message!: string;

  toast!: Toast;

  ngOnInit() {
    this.show()
  }

  show() {
    this.toast = new Toast(
      this.toastElm.nativeElement,
      this.type === ToastType.ERROR
        ? { autohide: false }
        : { delay: 3000 }
    )
    fromEvent(this.toastElm.nativeElement, 'hidden.bs.toast')
      .pipe(take(1))
      .subscribe(() => this.hide());

    this.toast.show();
  }

  hide() {
    this.toast.dispose();
    this.disposeEv.emit();
  }
}
