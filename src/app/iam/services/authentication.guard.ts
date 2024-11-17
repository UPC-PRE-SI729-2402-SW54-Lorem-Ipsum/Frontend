import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { map, take } from 'rxjs';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);

  return authenticationService.isSignedIn.pipe(
    take(1),
    map((isSignedIn) => {
      if (isSignedIn) {
        console.log('Access granted.');
        return true;
      } else {
        console.warn('Access denied. Redirecting to sign-in.');
        router.navigate(['/sign-in']);
        return false;
      }
    })
  );
};
