import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TransactionsComponent } from './transactions.component';

const routes: Routes = [
  {path: '', component: TransactionsComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TransactionsRoutingModule { }
