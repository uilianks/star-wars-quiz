import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './introduction.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: '', component: IntroductionComponent},
  {path: 'start', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroductionRoutingModule { }
