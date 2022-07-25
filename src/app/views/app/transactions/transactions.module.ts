import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { TransactionsComponent } from './transactions.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TabsComponent } from './components/tabs/tabs.component';



@NgModule({
  declarations: [TransactionsComponent, SummaryComponent, TabsComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class TransactionsModule { }
