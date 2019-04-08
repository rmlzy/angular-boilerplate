import { Component, OnInit } from '@angular/core';
import { SimpleTableService } from './simple-table.service';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.less']
})
export class SimpleTableComponent implements OnInit {
  tableData = [];
  loading = false;

  constructor(private service: SimpleTableService) {}

  ngOnInit() {
    this.loadTableData();
  }

  async loadTableData() {
    this.tableData = [];
    this.loading = true;

    this.tableData = await this.service.queryTableData();
    this.loading = false;
  }
}
