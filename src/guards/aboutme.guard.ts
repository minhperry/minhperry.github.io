import {inject, PLATFORM_ID} from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import {isPlatformBrowser} from "@angular/common";

export const hasRoleGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const platform = inject(PLATFORM_ID);

  if (isPlatformBrowser(platform)) {
    if (auth.hasRights()) {
      return true;
    } else {
      router.navigate(['404']);
      return false;
    }
  } else return false;
};
