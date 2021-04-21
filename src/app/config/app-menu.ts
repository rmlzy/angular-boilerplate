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
  { level: 1, title: "Home", icon: "home", link: "/" },
  {
    level: 1,
    title: "Interface",
    icon: "inbox",
    children: [
      { level: 2, title: "Typography", link: "/interface/typography" },
      { level: 2, title: "Buttons", link: "/interface/buttons" },
      { level: 2, title: "404", link: "/interface/404" },
      { level: 2, title: "500", link: "/interface/500" },
      { level: 2, title: "Maintenance", link: "/interface/maintenance" },
      { level: 2, title: "Ajax", link: "/interface/ajax" },
      { level: 2, title: "自定义组件", link: "/interface/custom-components" },
    ],
  },
];
