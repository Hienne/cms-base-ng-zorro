import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { authGuard } from './core/authentication/auth.guard';
import { PreloadSelectedModule } from './core/services/preload-selected-modules.service';
import { MainComponent } from './modules/main/main.component';
const routes: Routes = [
  {
    path: 'login',
    loadComponent: async () => (await import('./modules/auth/login.component')).LoginComponent,
  },
  {
    path: '',
    loadChildren: async () => (await import('./modules/main/main.module')).MainModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadSelectedModule})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
