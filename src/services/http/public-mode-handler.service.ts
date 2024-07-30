import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, timer, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicModeHandlerService {
  private api = environment.apiUrl + 'public'

  publicMode: boolean | null = null;
  private lastFetch = 0;
  private cacheDuration = 1000 * 60 * 5;
  
  constructor(private http: HttpClient) { 
    timer(this.cacheDuration, this.cacheDuration).subscribe(() => {
      this.fetch().subscribe();
    })
  }

  get() {
    const now = Date.now();
    if (this.publicMode === null || now - this.lastFetch > this.cacheDuration) {
      return of(this.publicMode)
    }

    return this.fetch();
  }

  private fetch(): Observable<boolean> {
    return this.http.get<boolean>(this.api).pipe(
      tap(mode => {
        this.publicMode = mode;
        this.lastFetch = Date.now();
      })
    )
  }
}
