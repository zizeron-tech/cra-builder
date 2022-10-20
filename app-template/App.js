import React from 'react';

import GlobalStyle from '../test-app/src/theme/globalStyle';
import RoutesComponent from './routesComponent';

import Theme from '../test-app/src/theme/Theme';

function App() {
  return (
    <Theme>
      <div>
        <GlobalStyle />
        <RoutesComponent />
      </div>
    </Theme>
  );
}

export default App;
