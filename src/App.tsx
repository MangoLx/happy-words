import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import Header from '@/components/header';
import { store } from './modules/store';
import { routes } from './routes';
import NotFound from '@/pages/error/404';
import '@arco-design/web-react/dist/css/arco.css';
import './App.less';

const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
