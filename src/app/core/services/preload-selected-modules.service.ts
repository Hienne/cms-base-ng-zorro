import { Inject, Injectable, inject } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadSelectedModule implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // if (this.shouldPreload()) return EMPTY;
    return this.selectedForPreload(route) ? load() : EMPTY;
  }

  selectedForPreload(route: Route): boolean {
    return route?.data?.['preload'];
  }

  // navigator.connection don't work
  // shouldPreload(): boolean {
  //   const conn = (navigator as any).connection;
  //   if (conn) {
  //     if (conn.saveData) {
  //       return false;
  //     }
  //     const effectiveType = conn.effectiveType || '';
  //     if (effectiveType.includes('2g')) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
}
