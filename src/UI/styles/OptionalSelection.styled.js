import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StFlexBox } from './common.styled';

export const StOptionalSelectionCheckbox = styled.input`
  width: 16px;
  height: 16px;
  border-color: ${StudyColors.buttonBorder};
  margin-right: 5px;
`;

export const StOptionalSelectionLabel = styled.label`
  ${StudyFontOptions.caption};
  color: ${StudyColors.buttonBorder};
  vertical-align: middle;
`;

export const StOptionalSelectionWrap = styled(StFlexBox)`
  margin-bottom: 32px;
`;
