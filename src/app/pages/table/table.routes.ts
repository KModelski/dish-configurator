import { Routes } from '@angular/router';

export const TABLE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./table.component').then((m) => m.TableComponent),
    children: [
      {
        path: 'table-preview',
        loadComponent: () =>
          import('./components/table-preview/table-preview.component').then(
            (m) => m.TablePreviewComponent
          ),
      },
      {
        path: 'dish-configurator',
        loadComponent: () =>
          import(
            './components/dish-configurator/dish-configurator.component'
          ).then((m) => m.DishConfiguratorComponent),
      },
      {
        path: 'plate-configurator',
        loadComponent: () =>
          import(
            './components/plate-configurator/plate-configurator.component'
          ).then((m) => m.PlateConfiguratorComponent),
      },
      {
        path: '',
        redirectTo: 'table-preview',
        pathMatch: 'full',
      },
    ],
  },
];
