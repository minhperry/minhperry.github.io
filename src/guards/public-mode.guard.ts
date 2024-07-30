import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { PublicModeHandlerService } from '../services/http/public-mode-handler.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const PublicModeGuard: CanActivateFn = (route, state) => {
  const phs = inject(PublicModeHandlerService);
  const router = inject(Router);

  return phs.get().pipe(
    map(isPublicMode => {
      console.log('Public mode:', isPublicMode);
      if (isPublicMode) {
        if (state.url === '/skyblock' || state.url === '/404') 
          return true
        else {
          router.navigate(['/skyblock']);
          return false;
        }
      } else {
        return true;
      }
    }),
    catchError(() => {
      router.navigate(['/404']);
      return of(false);
    })
  );
}