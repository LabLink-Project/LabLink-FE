import React from 'react';
import { fontColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';

function Title2({ children }) {
  return <StTitle>{children}</StTitle>;
}

export default Title2;

const StTitle = styled.div`
  width: 240px;
  height: 44px;

  overflow: hidden;
  text-overflow: ellipsis;

  /* 두 줄 말줄임 IE에서는 적용 안됨 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${fontOptions.subtitle};
  color: ${fontColors.title};
`;
