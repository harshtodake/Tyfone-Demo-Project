import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DematAccountPage } from './demat-account.page';

const routes: Routes = [
  {
    path: '',
    component: DematAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DematAccountPageRoutingModule {}
