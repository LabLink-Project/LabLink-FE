import { StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StFlexBox } from './common.styled';
import { fontColors } from 'src/shared/designColors';

export const StReadStudyH1 = styled.h1`
  ${StudyFontOptions.subtitle};
  font-weight: 500;
  margin-bottom: 16px;
`;

export const StWrap = styled(StFlexBox)`
  padding: 0 20px;
`;

export const StSearchResultWrap = styled.div`
  min-height: 80vh;
  margin-top: 24px;
  padding: 32px 20px 54px;
  border-radius: 24px 24px 0 0;
  background-color: ${fontColors.background};
`;
