import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { NzMenuThemeType } from "ng-zorro-antd/menu";
import { CONFIG } from "@/config";
import { IAppMenu } from "@/config/app-menu";
import { getPathFromUrl } from "@/helpers/utils";

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

  constructor(private router: Router) {
    this.menus = CONFIG.menus;
    this.menuTheme = CONFIG.asideTheme;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = getPathFromUrl(event.urlAfterRedirects);
        this.setActivateMenu(path);
      }
    });
  }

  ngOnInit() {}

  setActivateMenu(path: string) {
    const recursion = (children: IAppMenu): IAppMenu => {
      return children.map((menu) => {
        menu.open = false;
        menu.selected = menu.link === path;
        if (menu.children) {
          menu.children = recursion(menu.children);
          menu.open = !!menu.children.find((submenu) => submenu.link === path);
        }
        return menu;
      });
    };
    this.menus = recursion(this.menus);
  }

  toggle() {
    this.toggleCollapsed.emit();
  }
}
