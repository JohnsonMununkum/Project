import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'table-page',
    loadComponent: () => import('./table-page/table-page.page').then( m => m.TablePagePage)
  },
  {
    path: 'player-nominies',
    loadComponent: () => import('./player-nominies/player-nominies.page').then( m => m.PlayerNominiesPage)
  },
];
