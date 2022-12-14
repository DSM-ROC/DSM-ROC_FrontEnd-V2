import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'styles/index.css';
import 'styles/fonts.css';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
