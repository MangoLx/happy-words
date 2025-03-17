import { Result, Button } from '@arco-design/web-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const history = useNavigate();
  const backHome = () => {
    history('/home');
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，这个页面不存在"
      extra={
        <Button type="primary" onClick={backHome}>
          返回首页
        </Button>
      }
    />
  );
};

export default NotFound;
