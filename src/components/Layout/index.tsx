import React, { ReactNode, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import TabBar from '@/components/TabBar';
import { TAB_BAR_ITEMS } from '@/constants/tabBar';
import './index.less';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;

  // 检查当前路径是否需要显示TabBar
  const shouldShowTabBar = useCallback(() => {
    // 只要匹配到TAB_BAR_ITEMS中的任意一个路径，就显示TabBar
    return TAB_BAR_ITEMS.some(item => item.path === pathname);
  }, [pathname]);

  return (
    <div className="app-layout">
      <div className={`app-content ${shouldShowTabBar() ? 'has-tab-bar' : ''}`}>
        {children}
      </div>
      {shouldShowTabBar() && <TabBar />}
    </div>
  );
};

export default Layout;
