import { placeColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled, { css } from 'styled-components';

export const StPlace = styled.span`
  ${fontOptions.captionEmphasize}
  margin-left: 4px;

  ${props =>
    props.children === '온라인' &&
    css`
      color: ${placeColors.online};
    `}

  ${props =>
    props.children === '오프라인' &&
    css`
      color: ${placeColors.offline};
    `}
`;

// margin-bottom: 8px;
