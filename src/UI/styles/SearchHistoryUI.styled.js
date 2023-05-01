import { StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';

export const StSearchHistoryUI = styled.li`
  margin-right: 8px;
  border: 1px solid black;
  border-radius: 30px;
  padding: 6px 8px 6px 12px;
  white-space: nowrap;
  cursor: pointer;
`;

export const StSearchHistoryUISpan = styled.span`
  margin-right: 4px;
  ${StudyFontOptions.body}
`;

export const StSearchHistoryUICloseIcon = styled.img`
  vertical-align: baseline;
`;
