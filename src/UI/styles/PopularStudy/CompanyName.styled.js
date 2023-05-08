import { fontColors } from 'src/shared/designColors';
import { fontOptions } from 'src/shared/designFontOptions';
import styled from 'styled-components';

export const StCompanyName = styled.div`
  margin-bottom: 2px;

  ${fontOptions.body1};
  color: ${fontColors.title};
`;
