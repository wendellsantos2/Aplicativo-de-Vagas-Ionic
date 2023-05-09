import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroVagasPageRoutingModule } from './cadastro-vagas-routing.module';

import { CadastroVagasPage } from './cadastro-vagas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroVagasPageRoutingModule
  ],
  declarations: [CadastroVagasPage]
})
export class CadastroVagasPageModule {}
