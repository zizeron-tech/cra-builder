import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  // header's style
`;

const Header = () => {
  const lang = useSelector(state => state.language.lang);
  return (
    <HeaderContainer>Header: {lang}</HeaderContainer>
  )
}
 
export default Header;