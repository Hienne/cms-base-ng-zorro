import { TMenu } from '../models/menu';

export const MENUS: TMenu[] = [
  {
    level: 1,
    title: 'Dashboard',
    icon: 'dashboard',
    disabled: false,
    route: 'dashboard',
    permissions: []
  },
  {
    level: 1,
    title: 'Kanban',
    icon: 'carry-out',
    route: 'kanban',
    disabled: false,
    permissions: []
  }
];
