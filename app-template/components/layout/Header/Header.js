import React from 'react';
import styled from 'styled-components';

import { H1 } from '../../ui/';

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.brand03};
  // header's style
`;

const Header = () => {
  return (
    <HeaderContainer>
      <H1>hola</H1>
    </HeaderContainer>
  )
}
 
export default Header;