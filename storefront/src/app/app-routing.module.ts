import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TapesComponent } from './tapes/tapes.component';

const routes: Routes = [{ path: "", component: TapesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
