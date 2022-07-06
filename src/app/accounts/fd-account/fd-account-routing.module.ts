import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FdAccountPage } from './fd-account.page';

const routes: Routes = [
  {
    path: '',
    component: FdAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FdAccountPageRoutingModule {}
