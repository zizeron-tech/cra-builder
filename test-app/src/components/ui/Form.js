import styled from 'styled-components';
import {
  flexbox, layout, space, fontSize,
} from 'styled-system';

const Form = styled.form`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  gap: ${(props) => props.gap || '0.75rem'};
  ${layout}
  ${flexbox}
  ${space}
  ${fontSize}
`;

export default Form;
