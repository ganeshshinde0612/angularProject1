import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileattachComponent } from './fileattach/fileattach.component';

const routes: Routes = [
  {
    path:"fileattach",component:FileattachComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttachmentRoutingModule { }
