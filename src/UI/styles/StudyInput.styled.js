import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';

export const StStudyInput = styled.input`
  padding: 14px 12px;
  border: 1px solid ${StudyColors.inputBorder};
  min-width: 335px;
  box-sizing: border-box;
  ${StudyFontOptions.body}
`;

export const StAgeInput = styled(StStudyInput)`
  min-width: 140px;
  max-width: 140px;
  margin-right: 4px;
`;
