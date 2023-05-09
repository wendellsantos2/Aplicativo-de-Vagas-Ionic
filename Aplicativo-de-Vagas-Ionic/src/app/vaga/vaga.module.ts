import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VagaPageRoutingModule } from './vaga-routing.module';

import { VagaPage } from './vaga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VagaPageRoutingModule
  ],
  declarations: [VagaPage]
})
export class VagaPageModule {}
