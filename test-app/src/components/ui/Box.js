/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import {
  flexbox, layout, color, typography, space, border, shadow, position, compose,
} from 'styled-system';

const BoxWrapper = styled.div`
  gap: ${({ gap }) => (gap ? `${gap}rem` : '1rem')};
  ${compose(layout, flexbox, space, color, typography, border, shadow, position)};
`;

const Box = ({
  justify, align, flex, order, children, gap, ...rest
}) => (
  <BoxWrapper alignSelf={align} flex={flex} gap={gap} justifySelf={justify} order={order} {...rest}>
    {children}
  </BoxWrapper>
);

export default Box;
