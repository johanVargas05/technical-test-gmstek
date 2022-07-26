import { ITransaction } from "@views/app/transactions/interfaces/ITransaction";

export const data:ITransaction[] = [
{
  date: '9/25/21',
  merch: '123456',
  merchant: 'ABC Fuel Company',
  location: 'Miami international',
  type: 'KMIA/MIA',
  doDAAC: 'FP217',
  tail: '2F567E',
  item: 'Fuel & Services',
  total: '$8,699.50',
  card: 'AIR card 1234',
  status:'New'
}

]
export const columnsToDisplay = [
  'Date',
  'Merch Invoice',
  'Merchant',
  'Location',
  'ICAO/IATA',
  'DoDAAC',
  'Tail',
  'Item',
  'Total',
  'Card',
  'Status'
];
