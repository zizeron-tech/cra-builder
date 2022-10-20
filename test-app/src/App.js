import React from 'react';

import GlobalStyle from './theme/globalStyle';
import RoutesComponent from './routesComponent';

import Theme from './theme/Theme'

function App() {
  return (
    <Theme>
      <div>
        <GlobalStyle />
        <RoutesComponent/>
      </div>
    </Theme>
  );
}

export default App;