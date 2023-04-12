import { StudyColors, StudyFontOptions } from 'src/shared/Colors';
import styled from 'styled-components';

export const StDetailSearchAddressHistory = styled.li`
  ${StudyFontOptions.caption}
  padding: 4px 8px 4px 12px;
  border: 1px solid ${StudyColors.placeholder};
  border-radius: 5px;
`;

export const StDetailSearchAddressHistoryCloseIcon = styled.img`
  margin-left: 4px;
  vertical-align: middle;
`;
