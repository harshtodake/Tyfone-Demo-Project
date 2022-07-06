import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FdAccountPageRoutingModule } from './fd-account-routing.module';

import { FdAccountPage } from './fd-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FdAccountPageRoutingModule
  ],
  declarations: [FdAccountPage]
})
export class FdAccountPageModule {}
