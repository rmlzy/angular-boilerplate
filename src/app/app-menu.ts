// 目前仅支持三级目录
export const APP_MENUS = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    title: 'General',
    icon: 'appstore',
    children: [
      { title: 'Button 按钮', link: '/general/button' },
      { title: 'Icon 图标', link: '/general/icon' },
      { title: 'Grid 栅格', link: '/general/grid' }
    ]
  },
  {
    title: 'Navigation',
    icon: 'box-plot',
    children: [
      { title: 'Affix 固钉', link: '/navigation/affix' },
      { title: 'Breadcrumb 面包屑', link: '/navigation/breadcrumb' },
      { title: 'Dropdown 下拉菜单', link: '/navigation/dropdown' },
      { title: 'Menu 导航菜单', link: '/navigation/menu' },
      { title: 'PageHeader 页头', link: '/navigation/page-header' },
      { title: 'Pagination 分页', link: '/navigation/pagination' },
      { title: 'Steps 步骤条', link: '/navigation/steps' }
    ]
  },
  {
    title: 'Data Entry',
    icon: 'table',
    children: [
      { title: 'Autocomplete 自动完成', link: '/data-entry/autocomplete' },
      { title: 'Cascader 级联选择', link: '/data-entry/cascader' },
      { title: 'Checkbox 多选框', link: '/data-entry/checkbox' },
      { title: 'DatePicker 日期选择框', link: '/data-entry/date-picker' },
      { title: 'Form 表单', link: '/data-entry/form' },
      { title: 'Input 输入框', link: '/data-entry/input' },
      { title: 'InputNumber 数字输入框', link: '/data-entry/input-number' },
      { title: 'Mention 提及', link: '/data-entry/mention' },
      { title: 'Radio 单选框', link: '/data-entry/radio' },
      { title: 'Rate 评分', link: '/data-entry/rate' },
      { title: 'Select 选择器', link: '/data-entry/select' },
      { title: 'Slider 滑动输入条', link: '/data-entry/slider' },
      { title: 'Switch 开关', link: '/data-entry/switch' },
      { title: 'TimePicker 时间选择框', link: '/data-entry/time-picker' },
      { title: 'Transfer 穿梭框', link: '/data-entry/transfer' },
      { title: 'TreeSelect 树选择', link: '/data-entry/tree-select' },
      { title: 'Upload 上传', link: '/data-entry/upload' }
    ]
  }
];
