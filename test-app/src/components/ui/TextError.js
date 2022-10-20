import styled from 'styled-components';
import {
  layout,
  typography,
  space,
  variant,
} from 'styled-system';

const TextStyled = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-decoration: ${({ textDecoration }) => textDecoration};
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.pSmall};
  ${typography}
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
        fontSize: '12px',
      },
      medium: {
        fontSize: '14px',
      },
    },
  })};
`;

const TextError = ({ children, textDecoration = 'none', ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextStyled textDecoration={textDecoration} {...rest}>{children}</TextStyled>
);

export default TextError;