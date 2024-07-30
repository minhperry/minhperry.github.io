import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, timer, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicModeHandlerService {
  private api = environment.apiUrl + 'public'
  private publicModeSubj = new BehaviorSubject<boolean | null>(null);
  private cacheDuration = 1000 * 60 * 5;
  
  constructor(private http: HttpClient) { 
    timer(0, this.cacheDuration).pipe(
      switchMap(() => this.fetch())
    ).subscribe();
  }

  get() {
    return this.publicModeSubj.asObservable();
  }

  private fetch(): Observable<boolean> {
    return this.http.get<boolean>(this.api).pipe(
      tap(mode =>  this.publicModeSubj.next(mode))
    )
  }

  clearCache() {
    this.publicModeSubj.next(null);
    this.fetch().subscribe();
  }
}
