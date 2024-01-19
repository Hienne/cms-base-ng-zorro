import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { UserService } from 'src/app/core/services/user.service';
import { markFormDirty } from 'src/app/shared/utils/form-utils';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
  ],
  template: `
    <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0"
      >
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Sign in
            </h1>

            <form
              nz-form
              [formGroup]="signInForm"
              class="login-form"
              (ngSubmit)="submitForm()"
            >
              <nz-form-item>
                <nz-form-control nzErrorTip="Please input your username!">
                  <nz-input-group nzPrefixIcon="user">
                    <input
                      type="text"
                      nz-input
                      formControlName="userName"
                      placeholder="Username"
                    />
                  </nz-input-group>
                </nz-form-control>
              </nz-form-item>
              <nz-form-item>
                <nz-form-control nzErrorTip="Please input your Password!">
                  <nz-input-group nzPrefixIcon="lock">
                    <input
                      type="password"
                      nz-input
                      formControlName="password"
                      placeholder="Password"
                      autocomplete
                    />
                  </nz-input-group>
                </nz-form-control>
              </nz-form-item>
              <div nz-row class="login-form-margin">
                <div nz-col [nzSpan]="12">
                  <a>Forgot password</a>
                </div>
              </div>
              <button
                nz-button
                class="login-form-button login-form-margin"
                [nzType]="'primary'"
              >
                Log in
              </button>
              Or
              <a>register now!</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .login-form {
        max-width: 300px;
      }

      .login-form-margin {
        margin-bottom: 16px;
      }

      .login-form-button {
        width: 100%;
      }
    `,
  ],
})
export class LoginComponent {
  userService = inject(UserService);
  constructor(private fb: NonNullableFormBuilder) {}

  signInForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.signInForm.invalid) {
      markFormDirty(this.signInForm);
      return;
    }

    this.userService.login(this.signInForm.value.userName!, this.signInForm.value.password!);
  }
}
