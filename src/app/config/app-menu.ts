type Menu = {
  level: number;
  title: string;
  icon?: string;
  link?: string;
  children?: Menu[];
};

// 目前仅支持三级目录
export const APP_MENUS: Menu[] = [
  { level: 1, title: "控制台", icon: "dashboard", link: "/" },
  {
    level: 1,
    title: "通用",
    icon: "appstore",
    children: [
      { level: 2, title: "按钮", link: "/general/button" },
      { level: 2, title: "404", link: "/general/404" },
    ],
  },
  {
    level: 1,
    title: "业务组件",
    icon: "smile",
    children: [
      { level: 2, title: "简易表格", link: "/biz/simple-table" },
      { level: 2, title: "查询表格", link: "/biz/search-table" },
      { level: 2, title: "大数据表格", link: "/biz/data-table" },
      { level: 2, title: "简易表单", link: "/biz/simple-form" },
      { level: 2, title: "分步表单", link: "/biz/step-form" },
      { level: 2, title: "高级表单", link: "/biz/advanced-form" },
      { level: 2, title: "简易详情页", link: "/biz/simple-profile" },
      { level: 2, title: "高级详情页", link: "/biz/advanced-profile" },
      { level: 2, title: "异常", link: "/biz/exception" },
      { level: 2, title: "Markdown编辑器", link: "/biz/md-editor" },
      { level: 2, title: "富文本编辑器", link: "/biz/ueditor" },
      { level: 2, title: "图表", link: "/biz/echarts" },
      { level: 2, title: "高德地图", link: "/biz/amap" },
      { level: 2, title: "自定义组件", link: "/biz/custom-component" },
    ],
  },
];
