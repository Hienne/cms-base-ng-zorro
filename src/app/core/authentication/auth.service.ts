import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { TUser } from '../models/user';
import { UserService } from '../services/user.service';
import { PermissionOperator } from 'src/app/shared/directives/permission/permission.directive';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'auth';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user: TUser | null = null;

  private userService = inject(UserService);

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  constructor() {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token);

    // fake user
    // this.user = {
    //   name: 'hien',
    //   permissions: ['can_view'],
    // };
  }

  hasPermission(
    permissions: string[],
    permissionOperator: PermissionOperator = 'OR'
  ): boolean {
    if (!this.user || !this.user.permissions.length) return false;

    if (!permissions || !permissions.length) return false;

    if (permissionOperator === 'OR') {
      return permissions.some((p) => this.user?.permissions.includes(p));
    }

    return permissions.every((p: string) => this.user?.permissions.includes(p));
  }

  login(username: string, password: string) {
    return this.userService.login(username, password).pipe(
      tap((res: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, res.token);
        this.user = this.getUser(res.token);
      })
    );
  }

  private getUser(token: string): TUser | null {
    if (!token) return null;

    return JSON.parse(atob(token.split('.')[1])) as TUser;
  }
}
