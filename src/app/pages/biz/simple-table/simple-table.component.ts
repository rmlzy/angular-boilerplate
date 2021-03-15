import { Component, OnInit } from "@angular/core";
import Mock from "mockjs";
import { NzTableQueryParams } from "ng-zorro-antd/table";

interface ITableRow {
  id: number;
  name: string;
  age?: number;
  email?: string;
  address?: string;
}

interface IResponse {
  code: number;
  message: string;
  data: {
    total: number;
    pageIndex: number;
    pageSize: number;
    data: ITableRow[];
  };
}

interface ITableFilter {
  pageIndex: number;
  pageSize: number;
}

@Component({
  selector: "app-simple-table",
  templateUrl: "./simple-table.component.html",
  styleUrls: ["./simple-table.component.less"],
})
export class SimpleTableComponent implements OnInit {
  tableLoading = false;
  tableData: ITableRow[] = [];
  tablePager = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
  };

  constructor() {}

  ngOnInit(): void {
    this.fetchTableData();
  }

  private mockApi(filters: ITableFilter): Promise<IResponse> {
    const { pageSize, pageIndex } = filters;
    return new Promise((resolve) => {
      setTimeout(() => {
        const mock = Mock.mock({
          [`list|${pageSize}`]: [
            {
              "id|+1": 1,
              name: "@name()",
              age: "@integer(1, 100)",
              email: "@email()",
              address: "@cparagraph(1, 2)",
            },
          ],
        });
        const mockData: ITableRow[] = mock.list;
        resolve({
          code: 200,
          message: "success",
          data: {
            total: 100,
            pageIndex,
            pageSize,
            data: mockData,
          },
        });
      }, 500);
    });
  }

  async fetchTableData() {
    this.tableLoading = true;
    try {
      const res = await this.mockApi(this.tablePager);
      if (res.code !== 200) {
        return;
      }
      const { data, pageIndex, pageSize, total } = res.data;
      this.tableData = data;
      this.tablePager = { total, pageIndex, pageSize };
    } catch (e) {
    } finally {
      this.tableLoading = false;
    }
  }

  query(params: NzTableQueryParams) {
    const { pageSize, pageIndex } = params;
    this.tableData = [];
    this.tablePager = { total: 0, pageIndex, pageSize };
    this.fetchTableData();
  }
}
