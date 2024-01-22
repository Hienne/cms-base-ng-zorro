import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { PreloadSelectedModule } from './core/services/preload-selected-modules.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
const routes: Routes = [
  {
    path: 'login',
    loadComponent: async () => (await import('./pages/login/login.component')).LoginComponent,
  },
  {
    path: '',
    loadChildren: async () => (await import('./pages/main/main.module')).MainModule,
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadSelectedModule})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
