import React from 'react';

import GlobalStyle from './theme/globalStyle';
import RoutesComponent from './routesComponent';

import './scss/base/index.scss';

function App() {
  return (
    <div>
      <GlobalStyle />
      <RoutesComponent/>
    </div>
  );
}

export default App;