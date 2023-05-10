import styled from 'styled-components';
import { fontOptions } from 'src/shared/designFontOptions';

export const StSearchHistoryTitle = styled.h2`
  margin: 32px 20px 16px;
  ${fontOptions.title};
`;

export const StSearchHistorys = styled.ul`
  display: flex;
  overflow: scroll;
  ${fontOptions.body1};

  margin: 20px;

  /* 크롬, 사파리, 오페라, 엣지 지원 */
  /* 나머지 지원은 찾아보자 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
