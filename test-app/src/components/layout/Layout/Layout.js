import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

const LayoutContainer = styled.div`
  // layout's style
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    {children}
    <Footer />
  </LayoutContainer>
);

export default Layout;
