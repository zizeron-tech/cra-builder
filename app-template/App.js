import React from 'react';

import GlobalStyle from './theme/globalStyle';
import Routes from './routes';

import './scss/base/index.scss';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes/>
    </div>
  );
}

export default App;