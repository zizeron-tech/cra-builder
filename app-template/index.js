import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { TranslationsProvider } from '@bit/iamtechnologies.translations.translations';

import Theme from '../test-app/src/theme/Theme';

import TRANSLATIONS from './translations';

import App from './App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <TranslationsProvider translations={TRANSLATIONS}>
        <App />
      </TranslationsProvider>
    </Theme>
  </React.StrictMode>,
);
