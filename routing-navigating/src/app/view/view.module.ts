import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCmpComponent } from './view-cmp/view-cmp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewCmpComponent],
  imports: [
    CommonModule,
    // ViewCmpComponent,
    FormsModule
  ],
  exports:[
    ViewCmpComponent
  ]
})
export class ViewModule { }
