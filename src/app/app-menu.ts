type Menu = {
  level: number;
  title: string;
  icon?: string;
  link?: string;
  children?: Menu[];
};

// 目前仅支持三级目录
export const APP_MENUS: Menu[] = [
  { level: 1, title: "首页", icon: "dashboard", link: "/" },
  {
    level: 1,
    title: "通用",
    icon: "appstore",
    children: [
      { level: 2, title: "按钮", link: "/general/button" },
      { level: 2, title: "图标", link: "/general/icon" },
      { level: 2, title: "栅格", link: "/general/grid" },
      { level: 2, title: "警告提示", link: "/general/alert" },
      { level: 2, title: "抽屉", link: "/general/drawer" },
      { level: 2, title: "全局提示", link: "/general/message" },
      { level: 2, title: "对话框", link: "/general/modal" },
      { level: 2, title: "通知提醒框", link: "/general/notification" },
      { level: 2, title: "气泡确认框", link: "/general/popconfirm" },
      { level: 2, title: "进度条", link: "/general/progress" },
      { level: 2, title: "加载占位图", link: "/general/skeleton" },
      { level: 2, title: "加载中", link: "/general/spin" },
    ],
  },
  {
    level: 1,
    title: "导航",
    icon: "box-plot",
    children: [
      { level: 2, title: "固钉", link: "/navigation/affix" },
      { level: 2, title: "面包屑", link: "/navigation/breadcrumb" },
      { level: 2, title: "下拉菜单", link: "/navigation/dropdown" },
      { level: 2, title: "导航菜单", link: "/navigation/menu" },
      { level: 2, title: "页头", link: "/navigation/page-header" },
      { level: 2, title: "分页", link: "/navigation/pagination" },
      { level: 2, title: "步骤条", link: "/navigation/steps" },
    ],
  },
  {
    level: 1,
    title: "表单控件",
    icon: "table",
    children: [
      { level: 2, title: "自动完成", link: "/data-entry/autocomplete" },
      { level: 2, title: "级联选择", link: "/data-entry/cascader" },
      { level: 2, title: "多选框", link: "/data-entry/checkbox" },
      { level: 2, title: "日期选择框", link: "/data-entry/date-picker" },
      { level: 2, title: "表单", link: "/data-entry/form" },
      { level: 2, title: "输入框", link: "/data-entry/input" },
      { level: 2, title: "数字输入框", link: "/data-entry/input-number" },
      { level: 2, title: "提及", link: "/data-entry/mention" },
      { level: 2, title: "单选框", link: "/data-entry/radio" },
      { level: 2, title: "评分", link: "/data-entry/rate" },
      { level: 2, title: "选择器", link: "/data-entry/select" },
      { level: 2, title: "滑动输入条", link: "/data-entry/slider" },
      { level: 2, title: "开关", link: "/data-entry/switch" },
      { level: 2, title: "时间选择框", link: "/data-entry/time-picker" },
      { level: 2, title: "穿梭框", link: "/data-entry/transfer" },
      { level: 2, title: "树选择", link: "/data-entry/tree-select" },
      { level: 2, title: "上传", link: "/data-entry/upload" },
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
