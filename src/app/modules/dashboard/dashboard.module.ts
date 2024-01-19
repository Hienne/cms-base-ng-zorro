import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PermissionModule } from 'src/app/shared/directives/permission/permission.module';

const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NzButtonModule,
    PermissionModule,
  ]
})
export class DashboardModule { }
