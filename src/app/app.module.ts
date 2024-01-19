import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import vi from '@angular/common/locales/vi';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, vi_VN } from 'ng-zorro-antd/i18n';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './core/icons-provider.module';
import { authInterceptorProvider } from './core/interceptors/auth.interceptor';
import { ErrorInterceptorProvider } from './core/interceptors/error.interceptor';
import { PermissionModule } from './shared/directives/permission/permission.module';

registerLocaleData(vi);

export const BASE_URL = new InjectionToken<string>('BASE_URL', {
  factory: () => environment.baseUrl
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    PermissionModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    authInterceptorProvider,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
