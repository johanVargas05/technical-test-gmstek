import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { TopBarModule } from './top-bar/top-bar.module';



@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    TopBarModule
  ]
})
export class LayoutModule { }
