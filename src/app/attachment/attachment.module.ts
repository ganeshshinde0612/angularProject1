import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttachmentRoutingModule } from './attachment-routing.module';
import { FileattachComponent } from './fileattach/fileattach.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FileattachComponent
  ],
  imports: [
    CommonModule,
    AttachmentRoutingModule,
    ReactiveFormsModule
  ]
})
export class AttachmentModule { }
