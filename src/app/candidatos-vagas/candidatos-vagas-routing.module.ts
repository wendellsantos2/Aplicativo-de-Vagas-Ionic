import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidatosVagasPage } from './candidatos-vagas.page';

const routes: Routes = [
  {
    path: '',
    component: CandidatosVagasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatosVagasPageRoutingModule {}
