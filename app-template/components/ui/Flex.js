import styled from 'styled-components';
import {
  flexbox,
  layout,
  color,
  typography,
  space,
  border,
  shadow,
  position,
  compose,
} from 'styled-system';

const FlexWrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  ${compose(
    layout,
    flexbox,
    space,
    color,
    typography,
    border,
    shadow,
    position,
  )}
`;

const Flex = ({
  direction = 'row', justify = 'space-between', align = 'center', wrap = false, flex, order, children, gap, ...rest
}) => (
  <FlexWrapper
    alignItems={align}
    flex={flex}
    flexDirection={direction}
    flexWrap={wrap ? 'wrap' : 'nowrap'}
    gap={gap}
    justifyContent={justify}
    order={order}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </FlexWrapper>
);

export default Flex;
