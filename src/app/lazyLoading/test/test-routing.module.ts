import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OldVersionComponent } from './old-version/old-version.component';

const routes: Routes = [
  {
    path: '',
    component: OldVersionComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
