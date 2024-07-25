import { Injectable } from '@angular/core';

import { BehaviorSubject, interval, Observable } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  private timeSubject = new BehaviorSubject<string>('');
  private colonVisible = true;

  constructor() {
    this.updateTime();
    // Update the time every second
    interval(1000).subscribe(() => {
      this.updateTime();
    });
  }

  // Get the current time as an observable
  getTime() {
    return this.timeSubject.asObservable();
  }

  private updateTime() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString();

    // Toggle the visibility of the colon every second
    this.colonVisible = !this.colonVisible;

    const timeString = `${day}.${month}.${year} ${hours}${this.colonVisible ? ':' : ' '}${minutes}${!this.colonVisible ? ':' : ' '}${seconds}`;
    this.timeSubject.next(timeString);
  }
}
