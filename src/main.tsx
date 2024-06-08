import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './components/App/App';
import './tailwind.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename="/Language_Leap">
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
