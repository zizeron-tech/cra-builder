import styled from 'styled-components';
import {
  color,
  typography,
} from 'styled-system';

const LabelStyled = styled.label`
  font-family: 'Montserrat', sans-serif;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem 0.25rem 0 0;
  background-color: var(--bluegray-500);
  font-weight: 300;
  font-size: 0.875rem;
  color: var(--gray-50);
  ${color}
  ${typography}
`;

const Label = ({ children, name, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <LabelStyled htmlFor={name} {...rest}>{children}</LabelStyled>
);

export default Label;
