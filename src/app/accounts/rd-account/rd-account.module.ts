import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdAccountPageRoutingModule } from './rd-account-routing.module';

import { RdAccountPage } from './rd-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdAccountPageRoutingModule
  ],
  declarations: [RdAccountPage]
})
export class RdAccountPageModule {}
