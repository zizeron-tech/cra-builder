import React from 'react';
import styled from 'styled-components';

import { H2 } from '../../ui/';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.grey70};
  // footer's style
`;

const Footer = () => {

  return (
    <FooterContainer>
      <H2>Footer</H2>
    </FooterContainer>
  )
}
 
export default Footer;