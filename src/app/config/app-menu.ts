type Menu = {
  level: number;
  title: string;
  icon?: string;
  link?: string;
  children?: Menu[];
};

export const APP_MENUS: Menu[] = [
  { level: 1, title: "控制台", icon: "dashboard", link: "/" },
  {
    level: 1,
    title: "通用",
    icon: "appstore",
    children: [
      { level: 2, title: "buttons", link: "/general/buttons" },
      { level: 2, title: "404", link: "/general/404" },
      { level: 2, title: "500", link: "/general/500" },
      { level: 2, title: "maintenance", link: "/general/maintenance" },
      { level: 2, title: "ajax", link: "/general/ajax" },
    ],
  },
  {
    level: 1,
    title: "业务组件",
    icon: "smile",
    children: [{ level: 2, title: "简易表格", link: "/biz/simple-table" }],
  },
];
