import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsPage } from './accounts.page';

const routes: Routes = [
  {
    path: '',
    component: AccountsPage
  },
  {
    path: 'rd-account',
    loadChildren: () => import('./rd-account/rd-account.module').then( m => m.RdAccountPageModule)
  },
  {
    path: 'fd-account',
    loadChildren: () => import('./fd-account/fd-account.module').then( m => m.FdAccountPageModule)
  },
  {
    path: 'demat-account',
    loadChildren: () => import('./demat-account/demat-account.module').then( m => m.DematAccountPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsPageRoutingModule {}
