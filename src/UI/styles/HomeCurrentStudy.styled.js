import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';
import { StOverlap } from './HomePopularStudy.styled';
import { fontColors } from 'src/shared/designColors';

export const StHomeWrap = styled(StOverlap)`
  margin-top: -15px;
  padding-top: 32px;
  background-color: ${fontColors.white};
`;

export const StHomeCurrentStudyH2 = styled.h2`
  ${fontOptions.title};
  margin-bottom: 16px;
`;
