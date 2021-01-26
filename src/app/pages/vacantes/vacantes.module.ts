import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacantesPageRoutingModule } from './vacantes-routing.module';

import { VacantesPage } from './vacantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacantesPageRoutingModule
  ],
  declarations: [VacantesPage]
})
export class VacantesPageModule {}
