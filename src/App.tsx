import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './modules/store';
import { routes } from './routes';
import Layout from '@/components/Layout';
import NotFound from '@/pages/error/404';

import '@arco-design/mobile-react/dist/style.css';
import './App.less';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
