import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-table",
  templateUrl: "./simple-table.component.html",
  styleUrls: ["./simple-table.component.less"],
})
export class SimpleTableComponent implements OnInit {
  dataSource = [
    {
      key: "1",
      name: "Paweł Kuna",
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
