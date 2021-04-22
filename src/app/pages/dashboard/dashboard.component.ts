import { Component, OnInit } from "@angular/core";
import {
  revenueChart,
  newClientsChart,
  activeUserChart,
  mentionChart,
  developChart,
  demoTable,
} from "./mock-data";

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
  revenueChart: any;
  newClientsChart: any;
  activeUserChart: any;
  mentionChart: any;
  developChart: any;
  demoTable: any;

  constructor() {}

  ngOnInit() {
    this.revenueChart = revenueChart;
    this.newClientsChart = newClientsChart;
    this.activeUserChart = activeUserChart;
    this.mentionChart = mentionChart;
    this.developChart = developChart;
    this.demoTable = demoTable;
  }
}
