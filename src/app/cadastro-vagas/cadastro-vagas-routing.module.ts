import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroVagasPage } from './cadastro-vagas.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroVagasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroVagasPageRoutingModule {}
