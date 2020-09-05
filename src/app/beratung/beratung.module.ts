import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeratungPageRoutingModule } from './beratung-routing.module';

import { BeratungPage } from './beratung.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeratungPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [BeratungPage]
})
export class BeratungPageModule {}
