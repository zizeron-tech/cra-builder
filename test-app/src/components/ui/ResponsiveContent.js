import styled from 'styled-components';

import { device } from '../../theme/responsiveness';

const ResponsiveContent = styled.div`
  width: ${({ width }) => (width || 'auto')};
  display: ${({ mobile, displayMode = 'block' }) => (mobile ? displayMode : 'none')};

  @media ${device.tablet} {
    display: ${({ tablet, displayMode = 'block' }) => (tablet ? displayMode : 'none')};
  }
  @media ${device.laptop} {
    display: ${({ laptop, displayMode = 'block' }) => (laptop ? displayMode : 'none')};
  }
`;

export default ResponsiveContent;
