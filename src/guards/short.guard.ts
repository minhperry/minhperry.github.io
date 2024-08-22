import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const shortGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  return auth.isAdmin();
};
