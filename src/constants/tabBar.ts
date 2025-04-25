export interface TabBarItem {
  key: string;
  title: string;
  path: string;
}

export const TAB_BAR_ITEMS: TabBarItem[] = [
  {
    key: 'home',
    title: '主页',
    path: '/home'
  },
  {
    key: 'learn',
    title: '学习',
    path: '/learn',
  },
  {
    key: 'profile',
    title: '我的',
    path: '/profile',
  }
];

export const getActiveTabIndex = (pathname: string): number => {
  // 由于根路径已重定向到/home，这里不需要特殊处理根路径
  const index = TAB_BAR_ITEMS.findIndex(item => pathname === item.path);
  return index >= 0 ? index : 0;
};
