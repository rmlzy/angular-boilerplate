import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { CONFIG } from "../../../config";
import { IAppMenu } from "../../../config/app-menu";
import { NzMenuModeType, NzMenuThemeType } from "ng-zorro-antd/menu";

@Component({
  selector: "app-aside",
  templateUrl: "./app-aside.component.html",
  styleUrls: ["./app-aside.component.less"],
})
export class AppAsideComponent implements OnInit {
  @Input() collapsed: boolean | undefined;
  @Output() toggleCollapsed = new EventEmitter();

  menus: IAppMenu;
  menuTheme: NzMenuThemeType;
  menuMode: NzMenuModeType = "vertical";

  constructor() {
    this.menus = CONFIG.menus;
    this.menuTheme = CONFIG.asideTheme;
    this.menuMode = CONFIG.layout === "vertical" ? "horizontal" : "inline";
  }

  ngOnInit() {}

  toggle() {
    this.toggleCollapsed.emit();
  }
}
