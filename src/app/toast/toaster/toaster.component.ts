import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastEvent, ToastService } from '../../../services/toast/toast.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss'
})
export class ToasterComponent implements OnInit {
  currentToasts: ToastEvent[] = [];

  constructor(
    private toastServ: ToastService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscribeToToasts()
  }

  subscribeToToasts() {
    this.toastServ.toastEvent.subscribe((toast) => {
        const current: ToastEvent = {
          type: toast.type,
          title: toast.title,
          message: toast.message
        }
        this.currentToasts.push(current);
        this.cdr.detectChanges();
    })
  }

  dispose(index: number) {
    this.currentToasts.splice(index, 1);
    this.cdr.detectChanges();
  }

}
