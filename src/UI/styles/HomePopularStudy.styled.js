import { fontColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';

export const StOverlap = styled.div`
  margin-top: 24px;
  padding: 32px 20px;
  background-color: ${fontColors.background};
  border-radius: 24px 24px 0 0;
`;

export const StHomePopularStudysH2 = styled.h2`
  ${fontOptions.title};
  margin-bottom: 16px;
`;

export const StHomeStudysUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;
