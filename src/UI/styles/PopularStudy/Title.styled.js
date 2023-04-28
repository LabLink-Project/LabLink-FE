import { fontColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';

export const StTitle = styled.h2`
  width: 140px;
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
