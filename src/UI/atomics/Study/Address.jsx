import React from 'react';
import { fontColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';

function Address({ children }) {
  return <StAddress>{children}</StAddress>;
}

export default Address;

const StAddress = styled.div`
  ${fontOptions.caption};
  color: ${fontColors.caption};

  max-width: 100px;
  height: 16px;
  overflow: hidden;
`;
