import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';

export type PermissionOperator = 'OR' | 'AND';

@Directive({
  selector: '[hasPermission]',
})
export class PermissionDirective {
  private templateRef = inject(TemplateRef<any>);
  private viewContainer = inject(ViewContainerRef);
  private authService = inject(AuthService);

  private _isHidden = true;
  
  private _permissions: string[] = [];
  @Input() set hasPermission(val: string[]) {
    this._permissions = val;
    this.updateView();
  }

  private _operator: PermissionOperator = 'OR';
  @Input() set hasPermissionOperator(operator: PermissionOperator) {
    this._operator = operator;
    this.updateView();
  }

  constructor() {}

  private updateView() {
    if (
      this.authService.hasPermission(this._permissions, this._operator) &&
      this._isHidden
    ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this._isHidden = false;
    } else {
      this._isHidden = true;
      this.viewContainer.clear();
    }
  }
}
