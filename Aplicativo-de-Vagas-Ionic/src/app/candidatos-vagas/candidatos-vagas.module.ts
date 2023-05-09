import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidatosVagasPageRoutingModule } from './candidatos-vagas-routing.module';

import { CandidatosVagasPage } from './candidatos-vagas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidatosVagasPageRoutingModule
  ],
  declarations: [CandidatosVagasPage]
})
export class CandidatosVagasPageModule {}
