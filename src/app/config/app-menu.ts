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
  { level: 1, title: '首页', icon: 'home', link: '/' },
  {
    level: 1,
    title: '系统管理',
    icon: 'setting',
    children: [
      { level: 2, title: '用户管理', link: '/system/user' },
      { level: 2, title: '角色管理', link: '/system/role' },
      { level: 2, title: '权限管理', link: '/system/access' },
      { level: 2, title: '菜单管理', link: '/system/menu' },
    ],
  },
];
