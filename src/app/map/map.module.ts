import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';
import {TranslateModule} from '@ngx-translate/core';
import {CompsModule} from '../comps/comps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    CompsModule,
    TranslateModule.forChild()
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
