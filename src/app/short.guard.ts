import { CanActivateFn } from '@angular/router';

export const shortGuard: CanActivateFn = (route, state) => {
  return true;
};
