import { StudyFontOptions } from 'src/shared/Colors';
import { fontColors } from 'src/shared/designColors';
import styled from 'styled-components';

export const StSearchHistoryUI = styled.li`
  margin-right: 8px;
  border-radius: 30px;
  padding: 6px 8px 6px 12px;

  background-color: ${fontColors.background};

  white-space: nowrap;
  cursor: pointer;
`;

export const StSearchHistoryUISpan = styled.span`
  margin-right: 4px;
  ${StudyFontOptions.body}
`;
