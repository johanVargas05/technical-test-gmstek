import { Component, OnInit } from '@angular/core';

interface Transaction {
  merchant: string;
  code: number;
  quantity: string;
  retail: number;
  govPrice: number;
  amount: number;
}

@Component({
  selector: 'app-detail-transaction',
  templateUrl: './detail-transaction.component.html',
  styleUrls: ['./detail-transaction.component.scss']
})
export class DetailTransactionComponent implements OnInit {
  displayedColumns: string[] = ['merchant', 'code', 'quantity', 'retail', 'gov-price', 'amount', 'actions'];
  transactions: Transaction[] = [
    {merchant: 'JetA', code: 9130013054097, quantity:'1,926 gal',retail:4.36,govPrice:4.36,amount:83397.36},
    {merchant: 'Cleaning', code: 1019, quantity:'1',retail:324.11,govPrice:302.14,amount:302.14}
  ];
  pagePreview = 1;
  constructor() { }

  ngOnInit(): void {
  }

  get TotalCost() {
    return this.transactions.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }
}
