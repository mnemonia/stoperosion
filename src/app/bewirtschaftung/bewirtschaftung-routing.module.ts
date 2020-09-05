import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BewirtschaftungPage } from './bewirtschaftung.page';

const routes: Routes = [
  {
    path: '',
    component: BewirtschaftungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BewirtschaftungPageRoutingModule {}
