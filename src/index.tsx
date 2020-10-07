import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { setDefaultOptions } from 'esri-loader';
import { initializePhraseAppEditor } from 'react-intl-phraseapp';

import { AppProviders } from 'providers/AppProviders';

import { App } from './app/App';
import * as serviceWorker from './serviceWorker';

initializePhraseAppEditor({
  projectId: process.env.REACT_APP_PHRASE_PROJECT,
  phraseEnabled: Boolean(process.env.REACT_APP_PHRASE_PROJECT),
  prefix: '[[__',
  suffix: '__]]',
});

// configure esri-loader to lazy load the CSS
// the fisrt time any react-arcgis components are rendered
setDefaultOptions({
  css: true,
});

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

if (process.env.REACT_APP_SENTRY_DSN) {
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN, environment: process.env.REACT_APP_SENTRY_ENV });
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
