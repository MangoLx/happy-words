import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import './404.less';

const NotFound = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <div className="error-desc">抱歉，您访问的页面不存在</div>
        <div className="button-container">
          <Button color="primary" onClick={backHome}>
            返回首页
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
