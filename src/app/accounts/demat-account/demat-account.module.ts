import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DematAccountPageRoutingModule } from './demat-account-routing.module';

import { DematAccountPage } from './demat-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DematAccountPageRoutingModule
  ],
  declarations: [DematAccountPage]
})
export class DematAccountPageModule {}
