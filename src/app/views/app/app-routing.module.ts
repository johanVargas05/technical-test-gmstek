import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from '@layout/base/base.component';


const routes: Routes = [
  {
      path: '', component: BaseComponent,
      children: [
        {
          path: '',
          redirectTo: 'transactions',
          pathMatch: 'full'
        },
        {path:'transactions', loadChildren:()=> import('@views/app/transactions/transactions.module').then((m)=> m.TransactionsModule) }
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
