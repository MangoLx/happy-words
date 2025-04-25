import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import setRootPixel from '@arco-design/mobile-react/tools/flexible';
import App from './App.tsx';

setRootPixel(37.5);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
