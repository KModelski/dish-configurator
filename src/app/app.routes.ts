import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'table',
    loadChildren: () =>
      import('./pages/table/table.routes').then((m) => m.TABLE_ROUTES),
  },
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'table',
  },
];
