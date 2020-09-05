import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeratungPage } from './beratung.page';

const routes: Routes = [
  {
    path: '',
    component: BeratungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeratungPageRoutingModule {}
