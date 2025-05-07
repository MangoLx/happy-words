import React, { useCallback, useState } from 'react';
import { TabBar } from 'antd-mobile';
import { AppOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { TAB_BAR_ITEMS, getActiveTabIndex } from '@/constants/tabBar';
import './index.less';

// TabBar组件 - 包含主页、学习和我的三个选项卡
const TabBarComponent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  // 根据当前路径确定活动的选项卡
  const [activeTab, setActiveTab] = useState(getActiveTabIndex(pathname));

  // 处理选项卡变更
  const handleChange = useCallback((key: string) => {
    const tab = parseInt(key);
    setActiveTab(tab);
    const path = TAB_BAR_ITEMS[tab]?.path || '/home';
    navigate(path);
  }, [navigate]);

  const tabs = [
    {
      key: '0',
      title: '主页',
      icon: <AppOutline />,
    },
    {
      key: '1',
      title: '学习',
      icon: <UnorderedListOutline />,
    },
    {
      key: '2',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  return (
    <div className="tab-bar-container">
      <TabBar
        className="tab-bar"
        activeKey={activeTab.toString()}
        onChange={handleChange}
      >
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default TabBarComponent;
