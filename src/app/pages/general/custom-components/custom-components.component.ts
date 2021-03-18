import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-components",
  templateUrl: "./custom-components.component.html",
  styleUrls: ["./custom-components.component.less"],
})
export class CustomComponentsComponent implements OnInit {
  tags = ["A", "B"];

  constructor() {}

  ngOnInit(): void {}
}
