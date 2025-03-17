import { Menu } from '@arco-design/web-react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { headerMenus } from '@/constants/header-menus';
import './index.less';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (key: string) => {
    navigate(key);
  };

  return <div className={classNames('header')}>
    <Menu
      mode="horizontal"
      theme="dark"
      className="header-menu"
      onClickMenuItem={handleClick}
      selectedKeys={[location.pathname]}
    >
      {headerMenus.map((menu) => (
        <Menu.Item key={menu.path}>{menu.label}</Menu.Item>
      ))}
    </Menu>
  </div>;
};

export default Header;
