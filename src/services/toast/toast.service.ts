import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export enum ToastType {
  SUCCESS = 'toast-success',
  ERROR = 'toast-error',
  INFO = 'toast-info',
  WARNING = 'toast-warning',
}

export interface ToastEvent {
  type: ToastType;
  message: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastEvent: Observable<ToastEvent>;
  private _toastEvent = new Subject<ToastEvent>();

  constructor() { 
    this.toastEvent = this._toastEvent.asObservable();
  }

  success(title: string, message: string) {
    this._toastEvent.next({ message, title, type: ToastType.SUCCESS });
  }

  error(title: string, message: string) {
    this._toastEvent.next({ message, title, type: ToastType.ERROR });
  }

  info(title: string, message: string) {
    this._toastEvent.next({ message, title, type: ToastType.INFO });
  }

  warning(title: string, message: string) {
    this._toastEvent.next({ message, title, type: ToastType.WARNING });
  }
}
