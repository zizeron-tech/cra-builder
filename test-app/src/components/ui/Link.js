import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  layout,
  color,
  typography,
  space,
  variant,
} from 'styled-system';

const LinkStyled = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.brand01};
  cursor: pointer;
  text-decoration: none;
  ${typography}
  ${color}
  ${layout}
  ${space}
  ${variant({
    variants: {
      link: { textDecoration: 'underline' },
    },
  })}
`;

export default LinkStyled;