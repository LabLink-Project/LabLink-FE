import React from 'react';
import { serviceColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';

function PopularStudyLi({ children, ranking }) {
  return (
    <StStudyLi>
      <StSpan>{ranking}</StSpan>
      {children}
    </StStudyLi>
  );
}

export default PopularStudyLi;

const StStudyLi = styled.li`
  display: flex;
  margin-bottom: 8px;
  ${fontOptions.body1};
`;

const StSpan = styled.div`
  min-width: 16px;
  margin-right: 9px;
  color: ${serviceColors.primary};
  ${fontOptions.emphasize};
  overflow: hidden;
`;
