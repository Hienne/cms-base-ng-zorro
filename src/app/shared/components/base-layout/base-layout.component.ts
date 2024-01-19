import { Component } from '@angular/core';
import { MENUS } from 'src/app/core/constants/menus';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent {
  isCollapsed = false;
  menus = MENUS;

  changeCollapsed(isCollapsed: boolean) {
    this.isCollapsed = isCollapsed;
  }
}
