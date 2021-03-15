import { Component, OnInit } from "@angular/core";
import { CONFIG } from "../../../config";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.less"],
})
export class DefaultComponent implements OnInit {
  // 控制目录的展开/折叠
  collapsed = false;
  config = CONFIG;

  constructor() {}

  ngOnInit() {}

  onToggleCollapsed(evt: Event) {
    console.log("执行了 onToggleCollapsed");
    this.collapsed = !this.collapsed;
  }
}
