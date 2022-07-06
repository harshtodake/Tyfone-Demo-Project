import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdAccountPage } from './rd-account.page';

const routes: Routes = [
  {
    path: '',
    component: RdAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdAccountPageRoutingModule {}
