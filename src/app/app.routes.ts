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
  {
    path: 'votes',
    loadComponent: () => import('./votes/votes.page').then( m => m.VotesPage)
  },
  {
    path: 'palmer',
    loadComponent: () => import('./palmer/palmer.page').then( m => m.PalmerPage)
  },
  {
    path: 'foden',
    loadComponent: () => import('./foden/foden.page').then( m => m.FodenPage)
  },
  {
    path: 'watkins',
    loadComponent: () => import('./watkins/watkins.page').then( m => m.WatkinsPage)
  },
  {
    path: 'halland',
    loadComponent: () => import('./halland/halland.page').then( m => m.HallandPage)
  },
  {
    path: 'rice',
    loadComponent: () => import('./rice/rice.page').then( m => m.RicePage)
  },
];
