import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';

import { AppProviders } from 'providers/AppProviders';

import { App } from './app/App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN });
}

const app = (
  <AppProviders>
    <App />
  </AppProviders>
);

const root = document.getElementById('root');

if (process.env.REACT_APP_API_URL === '/mock') {
  const mockServer = import('./api/mockServer');

  mockServer.then(server => {
    server.mockServer();

    ReactDOM.render(app, root);
  });
} else {
  ReactDOM.render(app, root);
}

serviceWorker.unregister();
