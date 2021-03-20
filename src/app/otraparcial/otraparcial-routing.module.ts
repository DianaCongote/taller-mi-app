import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtraparcialPage } from './otraparcial.page';

const routes: Routes = [
  {
    path: '',
    component: OtraparcialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtraparcialPageRoutingModule {}
