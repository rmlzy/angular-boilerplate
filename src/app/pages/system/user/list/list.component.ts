import { Component, OnInit } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { IPageRes } from '~/core';
import { UserRecord } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit {
  loading: boolean = false;
  tableQuery = {
    username: '',
    realname: '',
  };
  tableData: IPageRes<UserRecord> = {
    pageIndex: 1,
    pageSize: 10,
    total: 0,
    items: [],
  };

  constructor(private userService: UserService) {}

  ngOnInit() {}

  async search() {
    this.loading = true;
    const { pageIndex, pageSize } = this.tableData;
    const { username, realname } = this.tableQuery;
    const { total, items } = await this.userService.fetchPageList({
      pageIndex,
      pageSize,
      username,
      realname,
    });
    this.tableData.total = total;
    this.tableData.items = items;
    this.loading = false;
  }

  async reset() {
    this.tableData.pageIndex = 1;
    this.tableData.pageSize = 10;
    this.tableQuery = {
      username: '',
      realname: '',
    };
    await this.search();
  }

  async onQueryChange(params: NzTableQueryParams) {
    const { pageIndex, pageSize } = params;
    this.tableData.pageIndex = pageIndex;
    this.tableData.pageSize = pageSize;
    await this.search();
  }
}
