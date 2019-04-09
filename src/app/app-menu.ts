// 目前仅支持三级目录
export const APP_MENUS = [
  {
    title: '首页',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    title: '通用',
    icon: 'appstore',
    children: [
      { title: '按钮', link: '/general/button' },
      { title: '图标', link: '/general/icon' },
      { title: '栅格', link: '/general/grid' },
      { title: '警告提示', link: '/general/alert' },
      { title: '抽屉', link: '/general/drawer' },
      { title: '全局提示', link: '/general/message' },
      { title: '对话框', link: '/general/modal' },
      { title: '通知提醒框', link: '/general/notification' },
      { title: '气泡确认框', link: '/general/popconfirm' },
      { title: '进度条', link: '/general/progress' },
      { title: '加载占位图', link: '/general/skeleton' },
      { title: '加载中', link: '/general/spin' }
    ]
  },
  {
    title: '导航',
    icon: 'box-plot',
    children: [
      { title: '固钉', link: '/navigation/affix' },
      { title: '面包屑', link: '/navigation/breadcrumb' },
      { title: '下拉菜单', link: '/navigation/dropdown' },
      { title: '导航菜单', link: '/navigation/menu' },
      { title: '页头', link: '/navigation/page-header' },
      { title: '分页', link: '/navigation/pagination' },
      { title: '步骤条', link: '/navigation/steps' }
    ]
  },
  {
    title: '表单控件',
    icon: 'table',
    children: [
      { title: '自动完成', link: '/data-entry/autocomplete' },
      { title: '级联选择', link: '/data-entry/cascader' },
      { title: '多选框', link: '/data-entry/checkbox' },
      { title: '日期选择框', link: '/data-entry/date-picker' },
      { title: '表单', link: '/data-entry/form' },
      { title: '输入框', link: '/data-entry/input' },
      { title: '数字输入框', link: '/data-entry/input-number' },
      { title: '提及', link: '/data-entry/mention' },
      { title: '单选框', link: '/data-entry/radio' },
      { title: '评分', link: '/data-entry/rate' },
      { title: '选择器', link: '/data-entry/select' },
      { title: '滑动输入条', link: '/data-entry/slider' },
      { title: '开关', link: '/data-entry/switch' },
      { title: '时间选择框', link: '/data-entry/time-picker' },
      { title: '穿梭框', link: '/data-entry/transfer' },
      { title: '树选择', link: '/data-entry/tree-select' },
      { title: '上传', link: '/data-entry/upload' }
    ]
  },
  {
    title: '业务组件',
    icon: 'smile',
    children: [
      { title: '简易表格', link: '/biz/simple-table' },
      { title: '查询表格', link: '/biz/search-table' },
      { title: '大数据表格', link: '/biz/data-table' },
      { title: '简易表单', link: '/biz/simple-form' },
      { title: '分步表单', link: '/biz/step-form' },
      { title: '高级表单', link: '/biz/advanced-form' },
      { title: '简易详情页', link: '/biz/simple-profile' },
      { title: '高级详情页', link: '/biz/advanced-profile' },
      { title: '异常', link: '/biz/exception' },
      { title: 'Markdown编辑器', link: '/biz/md-editor' },
      { title: '富文本编辑器', link: '/biz/ueditor' },
      { title: '图表', link: '/biz/echarts' },
      { title: '高德地图', link: '/biz/amap' }
    ]
  }
];
