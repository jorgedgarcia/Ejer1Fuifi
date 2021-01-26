import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacantePage } from './vacante.page';

const routes: Routes = [
  {
    path: '',
    component: VacantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacantePageRoutingModule {}
