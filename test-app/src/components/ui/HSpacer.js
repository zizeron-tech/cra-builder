import styled from 'styled-components';
import {
  flexbox,
  layout,
  space,
  compose,
} from 'styled-system';

const HSpacer = styled.div`
  font-family: 'Montserrat', sans-serif;
  height: ${({ height = '20px' }) => height};
  ${compose(
    layout,
    flexbox,
    space,
  )}
`;

export default HSpacer;
