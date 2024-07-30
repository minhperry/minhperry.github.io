import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PublicModeHandlerService } from '../services/http/public-mode-handler.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicModeGuard implements CanActivate {
  constructor(private phs: PublicModeHandlerService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.phs.get().pipe(
      map(isPublicMode => {
        if (isPublicMode) {
          return false;
        } else {
          this.router.navigate(['/skyblock']);
          return true;
        }
      }),
    );
  }
}
