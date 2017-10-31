import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AlphabeticBigCaseComponent } from './alphabetic-big-case.component';

const routes: Routes = [
  {
    path: '',
    component: AlphabeticBigCaseComponent,
    data: {
      title: 'Alphabetic Big Case'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlphabeticBigCaseRoutingModule {}