import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { SharedModule } from '@shared/shared.module';
import { SummaryComponent } from './components/summary/summary.component';



@NgModule({
  declarations: [TransactionsComponent, SummaryComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule
  ]
})
export class TransactionsModule { }
