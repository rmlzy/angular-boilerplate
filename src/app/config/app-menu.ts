type IMenu = {
  level: number;
  title: string;
  icon?: string;
  link?: string;
  open?: boolean;
  selected?: boolean;
  disabled?: boolean;
  children?: IMenu[];
};

export type IAppMenu = IMenu[];

export const APP_MENUS: IAppMenu = [
  { level: 1, title: "首页", icon: "home", link: "/" },
  {
    level: 1,
    title: "控件",
    icon: "inbox",
    children: [
      { level: 2, title: "Empty page", link: "/interface/empty" },
      { level: 2, title: "Accordion", link: "/interface/accordion" },
      { level: 2, title: "Blank page", link: "/interface/blank" },
      { level: 2, title: "Buttons", link: "/interface/buttons" },
      { level: 2, title: "404", link: "/interface/404" },
      { level: 2, title: "500", link: "/interface/500" },
      { level: 2, title: "Maintenance", link: "/interface/maintenance" },
      { level: 2, title: "Ajax", link: "/interface/ajax" },
      { level: 2, title: "自定义组件", link: "/interface/custom-components" },
    ],
  },
  {
    level: 1,
    title: "表单页",
    icon: "form",
    children: [
      { level: 2, title: "基础表单", link: "/form/basic" },
      { level: 2, title: "高级表单", link: "/form/advanced" },
    ],
  },
  {
    level: 1,
    title: "个人页",
    icon: "user",
    children: [{ level: 2, title: "个人设置", link: "/account/settings" }],
  },
];
