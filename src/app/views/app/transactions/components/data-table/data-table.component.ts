import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { columnsToDisplay, data } from '@constant/data';
import { ITransaction } from '../../interfaces/ITransaction';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DataTableComponent implements OnInit,AfterViewInit {
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<ITransaction>(this.allowMultiSelect, this.initialSelection);
  columnsToDisplay = columnsToDisplay;
  dataSource: MatTableDataSource<ITransaction>;
  columnsToDisplayWithExpand  = ['expand','select', ...this.columnsToDisplay, 'actions'];
  expandedElement: ITransaction | null = null;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(data);
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Rows Per page';
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  toggleAllRows() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
