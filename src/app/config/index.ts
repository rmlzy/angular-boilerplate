import { IAppMenu, APP_MENUS } from "./app-menu";
import { NzMenuThemeType } from "ng-zorro-antd/menu";

export interface IConfig {
  menus: IAppMenu;
  asideTheme: NzMenuThemeType;
  fixedHeader: boolean;
  fluid: boolean;
}

export const CONFIG: IConfig = {
  menus: APP_MENUS,
  asideTheme: "dark",
  fixedHeader: true,
  fluid: true,
};
