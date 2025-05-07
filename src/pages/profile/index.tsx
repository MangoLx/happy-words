import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, List } from 'antd-mobile';
import {
  SetOutline,
  SmileOutline,
  SetOutline as SettingOutline,
} from 'antd-mobile-icons';
import { RootState } from '@/modules/store';
import './index.less';

const ProfilePage: React.FC = () => {
  const { name } = useSelector((state: RootState) => state.user);
  // 设置项列表
  const settingItems = [
    {
      label: '外观 & 沉浸场景',
      icon: <SmileOutline className="icon-palette" />,
      onClick: () => console.log('点击了外观设置'),
    },
    {
      label: '学习设置',
      icon: <SetOutline className="icon-study" />,
      onClick: () => console.log('点击了学习设置'),
    },
    {
      label: '更多设置',
      icon: <SettingOutline className="icon-settings" />,
      onClick: () => console.log('点击了更多设置'),
    },
  ];

  return (
    <div className="profile-page">
      {/* 返回和消息按钮 */}
      <div className="header-actions">
        <div className="back-button">
          <i className="back-icon">&#8249;</i>
        </div>
        <div className="message-button">
          <span className="message-icon">✉</span>
          <span className="message-badge">7</span>
        </div>
      </div>

      {/* 用户信息卡片 */}
      <div className="user-profile">
        <div className="avatar-container">
          <Avatar className="user-avatar" src="🐧" />
        </div>
        <div className="user-id">{name}</div>
      </div>

      {/* 设置区域 */}
      <div className="settings-container">
        <List>
          {settingItems.map((item, index) => (
            <List.Item key={index} prefix={item.icon} onClick={item.onClick} arrow>
              {item.label}
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
};

export default ProfilePage;
