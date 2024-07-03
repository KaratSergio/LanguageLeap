import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '@redux/store';
import App from '@components/App/App';
import ThemeProvider from '@components/Theme/ThemeProvider';
import './tailwind.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <Router>
              <App />
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}
