import { fontColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';

export const StDeadline = styled.div`
  ${fontOptions.caption};
  color: ${fontColors.caption};
  margin-bottom: 2px;
`;
