import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BaseLayoutModule } from 'src/app/shared/components/base-layout/base-layout.module';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/core/authentication/auth.guard';

const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: async () =>
          (await import('../../modules/dashboard/dashboard.module')).DashboardModule,
        data: {
          breadcrumb: 'Dashboard',
          permissions: ['can_view']
        },
      },
      {
        path: 'kanban',
        loadChildren: async () =>
          (await import('../../modules/kanban/kanban.module')).KanbanModule,
        canActivate: [authGuard],
        data: {
          breadcrumb: 'Kanban',
          preload: true,
          permissions: ['can_view']
        },
      },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, BaseLayoutModule, RouterModule.forChild(ROUTES)],
})
export class MainModule {}
