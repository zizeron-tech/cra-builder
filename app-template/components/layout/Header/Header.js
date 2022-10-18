import React from 'react';

import './Header.scss';

const Header = () => {
  const lang = useSelector(state => state.language.lang);
  return (
    <header>Header: {lang}</header>
  )
}
 
export default Header;