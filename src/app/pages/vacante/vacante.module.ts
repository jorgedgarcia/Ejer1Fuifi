import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacantePageRoutingModule } from './vacante-routing.module';

import { VacantePage } from './vacante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacantePageRoutingModule
  ],
  declarations: [VacantePage]
})
export class VacantePageModule {}
