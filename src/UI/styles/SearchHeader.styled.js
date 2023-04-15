import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StFlexBox } from './common.styled';

export const StSearchHeaderNotification = styled.div`
  margin: 14px 0;
`;

export const StSearchHeaderTitle = styled.h1`
  ${StudyFontOptions.body};
  font-weight: 600;
`;

export const StSearchHeaderBackButton = styled.span`
  margin-right: 8px;
`;

export const StSearchHeaderWrap = styled(StFlexBox)`
  border-bottom: 1px solid ${StudyColors.searchBorder};
`;
