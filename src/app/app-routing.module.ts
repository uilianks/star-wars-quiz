import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: 'app/introduction/introduction.module#IntroductionModule'},
  {path: 'game', loadChildren: 'app/game/game.module#GameModule'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
