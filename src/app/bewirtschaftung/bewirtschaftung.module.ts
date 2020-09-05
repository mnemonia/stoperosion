import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BewirtschaftungPageRoutingModule } from './bewirtschaftung-routing.module';

import { BewirtschaftungPage } from './bewirtschaftung.page';
import {CompsModule} from '../comps/comps.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BewirtschaftungPageRoutingModule,
    CompsModule,
    TranslateModule.forChild()
  ],
  declarations: [BewirtschaftungPage]
})
export class BewirtschaftungPageModule {}
