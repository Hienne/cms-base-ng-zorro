import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  // isAuth will check permission in data router later
  const isAuth = true;
  if (!isAuth) {
    router.navigate(['/dashboard']);
  }
  return isAuth;
};
