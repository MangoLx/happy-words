import React, { useState } from 'react';
import { TabBar } from '@arco-design/mobile-react';
import { IconHome, IconFile, IconUser } from '@arco-design/mobile-react/esm/icon';
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
  const handleChange = (tab: number) => {
    setActiveTab(tab);
    const path = TAB_BAR_ITEMS[tab]?.path || '/home';
    navigate(path);
  };

  return (
    <div className="tab-bar-container">
      <TabBar className="tab-bar" activeIndex={activeTab} onChange={handleChange} fixed>
        <TabBar.Item key={0} title={'主页'} icon={<IconHome />} />
        <TabBar.Item key={1} title={'学习'} icon={<IconFile />} />
        <TabBar.Item key={2} title={'我的'} icon={<IconUser />} />
      </TabBar>
    </div>
  );
};

export default TabBarComponent;
