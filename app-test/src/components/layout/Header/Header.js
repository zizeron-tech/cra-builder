import React from 'react';
import styled from 'styled-components';
import { TagTrans } from '@bit/iamtechnologies.translations.translations';

import { H1 } from '../../ui';

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.brand03};
  // header's style
`;

const Header = () => (
  <HeaderContainer>
    <H1>hola</H1>
    <TagTrans tag="home_h1" />
    <TagTrans number="2" tag="results_count_text" total="10" />
  </HeaderContainer>
);

export default Header;
