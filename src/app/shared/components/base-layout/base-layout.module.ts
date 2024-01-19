import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PermissionModule } from '../../directives/permission/permission.module';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,

    PermissionModule,
  ],
  exports: [
    BaseLayoutComponent
  ]
})
export class BaseLayoutModule { }
