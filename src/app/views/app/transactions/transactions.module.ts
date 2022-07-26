import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TransactionsComponent } from './transactions.component';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { SharedModule } from '@shared/shared.module';
import { FiltersComponent } from './components/filters/filters.component';
import { DetailTransactionComponent } from './components/detail-transaction/detail-transaction.component';



@NgModule({
  declarations: [TransactionsComponent, SummaryComponent, TabsComponent, DataTableComponent, FiltersComponent, DetailTransactionComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule
  ]
})
export class TransactionsModule { }
