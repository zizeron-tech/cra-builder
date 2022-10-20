import styled from 'styled-components';
import {
  layout,
  color,
  typography,
  space,
  variant,
} from 'styled-system';

const TitleStyled = styled.h1`
  font-family: 'Montserrat', sans-serif;
  text-decoration: ${({ textDecoration }) => textDecoration};
  font-size: ${({ theme }) => theme.fontSize.h1};
  ${typography}
  ${color}
  ${layout}
  ${space}
  ${variant({
    variants: {
      bold: {
        fontFamily: 'Overpass',
        fontWeight: '700',
      },
      link: {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
      small: {
        fontSize: '16px',
      },
      medium: {
        fontSize: '22px',
      },
      big: {
        fontSize: '32px',
      },
    },
  })};
`;

const H1 = ({ children, textDecoration = 'none', ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TitleStyled textDecoration={textDecoration} {...rest}>{children}</TitleStyled>
);

export default H1;
