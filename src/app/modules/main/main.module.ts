import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BaseLayoutModule } from 'src/app/shared/components/base-layout/base-layout.module';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: async () =>
          (await import('./../dashboard/dashboard.module')).DashboardModule,
        data: {
          breadcrumb: 'Dashboard',
        },
      },
      {
        path: 'kanban',
        loadChildren: async () =>
          (await import('./../kanban/kanban.module')).KanbanModule,
        // canActivate: [authGuard],
        data: {
          breadcrumb: 'Kanban',
          preload: true,
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
