import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './fonts.css';
import App from './App.tsx';
import './index.css';
import { startAnalytics } from './lib/analytics';

startAnalytics();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
