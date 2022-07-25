import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from '@shared/shared.module';

import { TopBarComponent } from './top-bar.component';
import { SearchComponent } from './components/search/search.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    TopBarComponent,
    SearchComponent,
    ActionsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    SharedModule
  ],
  exports: [
    TopBarComponent
  ]
})
export class TopBarModule { }
