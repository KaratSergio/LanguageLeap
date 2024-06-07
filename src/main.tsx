import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App/App';

import 'tailwindcss/tailwind.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter basename="/Language_Leap">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
