import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarPage } from './tab-bar.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabBarPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboard/dashboard.module').then(
                (m) => m.DashboardPageModule
              ),
          },
          {
            path: 'send-money',
            loadChildren: () =>
              import('../dashboard/send-money/send-money.module').then(
                (m) => m.SendMoneyPageModule
              ),
          },
        ],
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then((m) => m.HomePageModule),
          },
        ],
      },
      {
        path: 'accounts',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../accounts/accounts.module').then(
                (m) => m.AccountsPageModule
              ),
          },
          {
            path: 'demat-acc',
            loadChildren: () =>
              import('../accounts/demat-account/demat-account.module').then(
                (m) => m.DematAccountPageModule
              ),
          },
          {
            path: 'fd-acc',
            loadChildren: () =>
              import('../accounts/fd-account/fd-account.module').then(
                (m) => m.FdAccountPageModule
              ),
          },
          {
            path: 'rd-acc',
            loadChildren: () =>
              import('../accounts/rd-account/rd-account.module').then(
                (m) => m.RdAccountPageModule
              ),
          },
        ],
      },
      {
        path: 'transfers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../transfers/transfers.module').then(
                (m) => m.TransfersPageModule
              ),
          },
        ],
      },
      {
        path: 'deposit',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../deposit/deposit.module').then(
                (m) => m.DepositPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule {}
