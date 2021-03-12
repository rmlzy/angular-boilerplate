import { Component, OnInit } from "@angular/core";

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.less"],
})
export class DashboardComponent implements OnInit {
  chart1Options: any;
  chart2Options: any;
  listOfData: Person[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "5",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "6",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
  ];

  constructor() {}

  ngOnInit() {
    this.initLineChart1();
    this.initChart2();
  }

  initLineChart1() {
    this.chart1Options = {
      grid: {
        left: 0,
        right: 0,
      },
      xAxis: {
        show: false,
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        show: false,
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
          areaStyle: {},
        },
      ],
    };
  }

  initChart2() {
    this.chart2Options = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ["product", "2015", "2016", "2017"],
          ["A", 43.3, 85.8, 93.7],
          ["B", 83.1, 73.4, 55.1],
          ["C", 86.4, 65.2, 82.5],
          ["D", 72.4, 53.9, 39.1],
          ["E", 83.1, 73.4, 55.1],
          ["F", 83.1, 73.4, 55.1],
          ["G", 83.1, 73.4, 55.1],
          ["H", 86.4, 65.2, 82.5],
          ["I", 43.3, 85.8, 93.7],
        ],
      },
      xAxis: { type: "category" },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
    };
  }
}
