type IMenu = {
  level: number;
  title: string;
  icon?: string;
  link?: string;
  disabled?: boolean;
  children?: IMenu[];
};

export type IAppMenu = IMenu[];

export const APP_MENUS: IAppMenu = [
  { level: 1, title: "控制台", icon: "dashboard", link: "/" },
  {
    level: 1,
    title: "通用",
    icon: "appstore",
    children: [
      { level: 2, title: "Typography", link: "/general/typography" },
      { level: 2, title: "Buttons", link: "/general/buttons" },
      { level: 2, title: "404", link: "/general/404" },
      { level: 2, title: "500", link: "/general/500" },
      { level: 2, title: "Maintenance", link: "/general/maintenance" },
      { level: 2, title: "Ajax", link: "/general/ajax" },
      { level: 2, title: "Custom Components", link: "/general/custom-components" },
    ],
  },
  {
    level: 1,
    title: "业务组件",
    icon: "smile",
    children: [
      { level: 2, title: "简易表格", link: "/biz/simple-table" },
      { level: 2, title: "大数据表格", link: "/biz/bigdata-table" },
    ],
  },
];
