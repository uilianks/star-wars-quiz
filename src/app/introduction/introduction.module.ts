import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionRoutingModule } from './introduction-routing.module';

import { IntroductionComponent } from './introduction.component';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    CommonModule,
    IntroductionRoutingModule
  ],
  declarations: [IntroductionComponent, StartComponent]
})
export class IntroductionModule { }
