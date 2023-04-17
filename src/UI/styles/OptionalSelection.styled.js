import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';
import { StFlexBox } from './common.styled';

export const StOptionalSelectionLabel = styled.label`
  ${StudyFontOptions.caption};
  color: ${StudyColors.buttonBorder};
  vertical-align: middle;
`;

export const StOptionalSelectionWrap = styled(StFlexBox)`
  margin: 12px 0 32px;
`;
