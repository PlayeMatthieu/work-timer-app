import {Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'timer',
        loadComponent: () =>
          import('../pages/timer_tab/timer_tab.page').then((m) => m.Timer_tab),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('../pages/projects_tab/projects_tab').then((m) => m.Projects_tab),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../pages/settings_tab/settings_tab.page').then((m) => m.Settings_tabPage),
      },
      {
        path: '',
        redirectTo: '/tabs/timer',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/timer',
    pathMatch: 'full',
  },
];
