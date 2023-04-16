import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';

export const StHomeRealTimeUpdateH2 = styled.h2`
  ${StudyFontOptions.title}
  margin: 32px 0 16px;
`;

export const StHomeRealTimeMoreButton = styled.button`
  min-width: 335px;
  min-height: 48px;

  margin: 32px 0 54px;
  border: 1px solid ${StudyColors.moreBorder};
  padding: 13px auto;
`;

export const StHomeRealTimeMoreSpan = styled.span`
  ${StudyFontOptions.subtitle}
  color: ${StudyColors.paragraph};
  margin-right: 4px;
`;
