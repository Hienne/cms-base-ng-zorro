import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzBreakpointKey } from 'ng-zorro-antd/core/services';
import { NzMenuModeType, NzMenuThemeType } from 'ng-zorro-antd/menu';
import { MENUS } from 'src/app/core/constants/menus';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isCollapsed = false;
  @Input() theme: NzMenuThemeType = 'dark';
  @Input() mode: NzMenuModeType = 'inline';
  @Input() breakpoint: NzBreakpointKey = 'md';
  @Output() collapseChange = new EventEmitter<boolean>();
  menus = MENUS;

  changeCollapse(isCollapsed: boolean) {
    this.collapseChange.emit(isCollapsed);
  }
}
